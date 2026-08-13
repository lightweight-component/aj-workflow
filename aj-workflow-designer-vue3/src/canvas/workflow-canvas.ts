import Raphael from "raphael";
import type { Box, Point, WorkflowDefinition, WorkflowNode } from "@/domain/workflow";
import { center, connectionPoint } from "./geometry";
import { SvgText } from "./svg-text";

export type Selection = { kind: "node"; ref: string } | { kind: "nodes"; refs: string[] } | { kind: "path"; ref: string } | null;
export interface CanvasHooks {
  onSelect(selection: Selection): void;
  onZoom?(percentage: number): void;
  onEditStart?(): void;
  onEditEnd?(): void;
}
interface RenderedNode { shape: any; label: SvgText; data: WorkflowNode }
interface RenderedPath { line: any; label?: SvgText; handles: any[] }

/** Raphael 命令式画布；Vue 只持有业务模型和选择标识。 */
export class WorkflowCanvas {
  private readonly paper: any;
  private readonly svg: SVGSVGElement;
  private readonly nodes = new Map<string, RenderedNode>();
  private readonly paths = new Map<string, RenderedPath>();
  private data: WorkflowDefinition | null = null;
  private selected: Selection = null;
  private readonly resizeHandles: any[] = [];
  private readOnly: boolean;
  private zoom = 1;
  private pan = { x: 0, y: 0 };
  private panning = false;
  private panStart = { x: 0, y: 0, viewX: 0, viewY: 0 };
  private marquee: any = null;
  private marqueeStart: Point | null = null;

  constructor(private readonly host: HTMLElement, private readonly hooks: CanvasHooks, readOnly = false) {
    this.readOnly = readOnly;
    this.paper = Raphael(host, host.clientWidth || 800, host.clientHeight || 500);
    this.svg = host.querySelector("svg") as SVGSVGElement;
    this.host.addEventListener("wheel", this.onWheel, { passive: false });
    this.host.addEventListener("mousedown", this.onPanStart);
    this.host.addEventListener("mousedown", this.onMarqueeStart);
    window.addEventListener("mousemove", this.onPanMove);
    window.addEventListener("mouseup", this.onPanEnd);
    this.applyViewBox();
  }

  setReadOnly(value: boolean): void { this.readOnly = value; this.select(this.selected); }

  load(data: WorkflowDefinition): void {
    this.paper.clear(); this.nodes.clear(); this.paths.clear(); this.selected = null; this.data = data;
    Object.entries(data.states).forEach(([ref, node]) => this.drawNode(ref, node));
    Object.keys(data.paths).forEach(ref => this.drawPath(ref));
  }

  refresh(): void {
    if (!this.data) return;
    for (const [ref, rendered] of this.nodes) {
      this.updateNodeShape(rendered.shape, rendered.data);
      rendered.label.setText(rendered.data.props.displayName?.value || rendered.data.text?.text || ref);
      rendered.label.centerIn(rendered.data.attr);
    }
    for (const ref of this.paths.keys()) this.updatePath(ref);
  }

  destroy(): void {
    this.host.removeEventListener("wheel", this.onWheel);
    this.host.removeEventListener("mousedown", this.onPanStart);
    this.host.removeEventListener("mousedown", this.onMarqueeStart);
    window.removeEventListener("mousemove", this.onPanMove);
    window.removeEventListener("mouseup", this.onPanEnd);
    window.removeEventListener("mousemove", this.onMarqueeMove);
    this.paper.remove(); this.nodes.clear(); this.paths.clear(); this.data = null;
  }

  resize(): void { this.paper.setSize(this.host.clientWidth || 800, this.host.clientHeight || 500); this.applyViewBox(); }
  zoomIn(): void { this.setZoom(this.zoom * 1.2); }
  zoomOut(): void { this.setZoom(this.zoom / 1.2); }
  resetView(): void { this.zoom = 1; this.pan = { x: 0, y: 0 }; this.applyViewBox(); this.hooks.onZoom?.(100); }

  moveSelection(dx: number, dy: number): void {
    if (this.readOnly || !this.data || !this.selected || this.selected.kind === "path") return;
    const refs = this.selected.kind === "nodes" ? this.selected.refs : [this.selected.ref];
    this.hooks.onEditStart?.();
    this.translateNodes(refs, dx, dy, true);
    this.select(refs.length > 1 ? { kind: "nodes", refs } : { kind: "node", ref: refs[0] });
    this.hooks.onEditEnd?.();
  }

  alignSelection(mode: "left" | "center" | "right" | "top" | "middle" | "bottom"): void {
    if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 2) return;
    const nodes = this.selected.refs.map(ref => this.data!.states[ref]);
    const boxes = nodes.map(node => node.attr), left = Math.min(...boxes.map(box => box.x)), right = Math.max(...boxes.map(box => box.x + box.width));
    const top = Math.min(...boxes.map(box => box.y)), bottom = Math.max(...boxes.map(box => box.y + box.height));
    this.hooks.onEditStart?.();
    nodes.forEach(node => {
      if (mode === "left") node.attr.x = left;
      if (mode === "center") node.attr.x = (left + right - node.attr.width) / 2;
      if (mode === "right") node.attr.x = right - node.attr.width;
      if (mode === "top") node.attr.y = top;
      if (mode === "middle") node.attr.y = (top + bottom - node.attr.height) / 2;
      if (mode === "bottom") node.attr.y = bottom - node.attr.height;
    });
    this.refresh(); this.select(this.selected); this.hooks.onEditEnd?.();
  }

  distributeSelection(axis: "horizontal" | "vertical"): void {
    if (this.readOnly || !this.data || this.selected?.kind !== "nodes" || this.selected.refs.length < 3) return;
    const entries = this.selected.refs.map(ref => ({ ref, box: this.data!.states[ref].attr })).sort((a, b) => axis === "horizontal" ? a.box.x - b.box.x : a.box.y - b.box.y);
    const first = entries[0].box, last = entries.at(-1)!.box;
    const totalSize = entries.reduce((sum, entry) => sum + (axis === "horizontal" ? entry.box.width : entry.box.height), 0);
    const span = axis === "horizontal" ? last.x + last.width - first.x : last.y + last.height - first.y;
    const gap = (span - totalSize) / (entries.length - 1);
    this.hooks.onEditStart?.();
    let cursor = (axis === "horizontal" ? first.x + first.width : first.y + first.height) + gap;
    entries.slice(1, -1).forEach(entry => { if (axis === "horizontal") { entry.box.x = cursor; cursor += entry.box.width + gap; } else { entry.box.y = cursor; cursor += entry.box.height + gap; } });
    this.refresh(); this.select(this.selected); this.hooks.onEditEnd?.();
  }

  fitToContent(): void {
    if (!this.data || !Object.keys(this.data.states).length) { this.resetView(); return; }
    const boxes = Object.values(this.data.states).map(node => node.attr);
    const minX = Math.min(...boxes.map(box => box.x)) - 50, minY = Math.min(...boxes.map(box => box.y)) - 50;
    const maxX = Math.max(...boxes.map(box => box.x + box.width)) + 50, maxY = Math.max(...boxes.map(box => box.y + box.height)) + 50;
    const width = Math.max(1, maxX - minX), height = Math.max(1, maxY - minY);
    this.zoom = Math.min(this.host.clientWidth / width, this.host.clientHeight / height, 2);
    this.pan = { x: minX, y: minY }; this.applyViewBox();
    this.hooks.onZoom?.(Math.round(this.zoom * 100));
  }

  focus(selection: Selection): void {
    if (!selection || !this.data) return;
    let point: Point | null = null;
    if (selection.kind === "node") point = center(this.data.states[selection.ref].attr);
    else if (selection.kind === "nodes") {
      const boxes = selection.refs.map(ref => this.data!.states[ref]?.attr).filter(Boolean);
      if (boxes.length) point = { x: boxes.reduce((sum, box) => sum + center(box).x, 0) / boxes.length, y: boxes.reduce((sum, box) => sum + center(box).y, 0) / boxes.length };
    } else {
      const path = this.data.paths[selection.ref];
      if (path) point = polylineMidpoint(this.pathPoints(path));
    }
    if (point) {
      const size = this.viewSize();
      this.pan = { x: point.x - size.width / 2, y: point.y - size.height / 2 };
      this.applyViewBox(); this.select(selection);
    }
  }

  select(selection: Selection): void {
    this.clearSelectionStyle(); this.clearHandles(); this.clearResizeHandles(); this.selected = selection;
    if (selection?.kind === "node") { this.nodes.get(selection.ref)?.shape.attr({ stroke: "#2f7cf6", "stroke-width": 3 }); if (!this.readOnly) this.renderResizeHandles(selection.ref); }
    if (selection?.kind === "nodes") selection.refs.forEach(ref => this.nodes.get(ref)?.shape.attr({ stroke: "#2f7cf6", "stroke-width": 3 }));
    if (selection?.kind === "path") {
      this.paths.get(selection.ref)?.line.attr({ stroke: "#2f7cf6", "stroke-width": 3 });
      if (!this.readOnly) this.renderHandles(selection.ref);
    }
    this.hooks.onSelect(selection);
  }

  private drawNode(ref: string, node: WorkflowNode): void {
    const { x, y, width, height } = node.attr;
    let shape: any;
    if (["decision", "fork", "join"].includes(node.type)) shape = this.paper.path(diamond({ x, y, width, height }));
    else if (["start", "end"].includes(node.type)) shape = this.paper.ellipse(x + width / 2, y + height / 2, width / 2, height / 2);
    else shape = this.paper.rect(x, y, width, height, 8);
    shape.attr({ fill: node.type === "end" ? "#fff1f0" : "#f5f8ff", stroke: "#356aa0", "stroke-width": 2, cursor: this.readOnly ? "default" : "move" });
    shape.click((event: MouseEvent) => this.selectNode(ref, event.shiftKey || event.metaKey || event.ctrlKey));
    const label = new SvgText(this.svg, node.props.displayName?.value || node.text?.text || ref);
    label.centerIn(node.attr); label.element.style.pointerEvents = "none";
    this.nodes.set(ref, { shape, label, data: node });
    let dragRefs: string[] = [];
    let starts = new Map<string, Box>();
    let internalDots = new Map<string, Point[]>();
    shape.drag((dx: number, dy: number) => {
      if (this.readOnly) return;
      dragRefs.forEach(nodeRef => {
        const rendered = this.nodes.get(nodeRef), start = starts.get(nodeRef);
        if (!rendered || !start) return;
        rendered.data.attr.x = start.x + dx / this.zoom;
        rendered.data.attr.y = start.y + dy / this.zoom;
        this.updateNodeShape(rendered.shape, rendered.data);
        rendered.label.centerIn(rendered.data.attr);
      });
      const affectedPaths = new Set<string>();
      const x = dx / this.zoom, y = dy / this.zoom;
      internalDots.forEach((dots, pathRef) => { this.data!.paths[pathRef].dots = dots.map(point => ({ x: point.x + x, y: point.y + y })); });
      dragRefs.forEach(nodeRef => this.connectedPathRefs(nodeRef).forEach(pathRef => affectedPaths.add(pathRef)));
      affectedPaths.forEach(pathRef => this.updatePath(pathRef));
    }, () => {
      if (this.readOnly) return;
      const selectedRefs = this.selected?.kind === "nodes" ? this.selected.refs : this.selected?.kind === "node" ? [this.selected.ref] : [];
      dragRefs = selectedRefs.includes(ref) ? [...selectedRefs] : [ref];
      starts = new Map(dragRefs.map(nodeRef => [nodeRef, { ...this.data!.states[nodeRef].attr }]));
      const selectedSet = new Set(dragRefs);
      internalDots = new Map(Object.entries(this.data!.paths).filter(([, path]) => selectedSet.has(path.from) && selectedSet.has(path.to)).map(([pathRef, path]) => [pathRef, path.dots.map(point => ({ ...point }))]));
      this.hooks.onEditStart?.();
      this.select(dragRefs.length > 1 ? { kind: "nodes", refs: dragRefs } : { kind: "node", ref });
    }, () => { if (!this.readOnly) this.hooks.onEditEnd?.(); });
  }

  private drawPath(ref: string): void {
    const line = this.paper.path().attr({ stroke: "#77808a", "stroke-width": 2, "arrow-end": "classic-wide-long", fill: "none", cursor: "pointer" });
    line.click(() => this.select({ kind: "path", ref }));
    line.dblclick((event: MouseEvent) => { if (!this.readOnly) this.addWaypoint(ref, this.clientToCanvas(event.clientX, event.clientY)); });
    const rendered: RenderedPath = { line, handles: [] };
    this.paths.set(ref, rendered); this.updatePath(ref); line.toBack();
  }

  private updateNodeShape(shape: any, node: WorkflowNode): void {
    const box = node.attr;
    if (["decision", "fork", "join"].includes(node.type)) shape.attr({ path: diamond(box) });
    else if (["start", "end"].includes(node.type)) shape.attr({ cx: box.x + box.width / 2, cy: box.y + box.height / 2, rx: box.width / 2, ry: box.height / 2 });
    else shape.attr(box);
  }

  private pathPoints(path: WorkflowDefinition["paths"][string]): Point[] {
    if (!this.data) return [];
    const from = this.data.states[path.from].attr, to = this.data.states[path.to].attr;
    const firstTarget = path.dots[0] || center(to), lastSource = path.dots[path.dots.length - 1] || center(from);
    return [connectionPoint(from, firstTarget), ...path.dots, connectionPoint(to, lastSource)];
  }

  private updatePath(ref: string): void {
    if (!this.data) return;
    const path = this.data.paths[ref], rendered = this.paths.get(ref);
    if (!path || !rendered || !this.data.states[path.from] || !this.data.states[path.to]) return;
    const points = this.pathPoints(path);
    rendered.line.attr({ path: points.map((point, i) => `${i ? "L" : "M"}${point.x} ${point.y}`).join("") });
    const labelText = path.props.displayName?.value || path.text?.text || "";
    if (labelText && !rendered.label) { rendered.label = new SvgText(this.svg, labelText); rendered.label.element.style.pointerEvents = "none"; }
    if (!labelText && rendered.label) { rendered.label.remove(); rendered.label = undefined; }
    if (rendered.label) {
      rendered.label.setText(labelText);
      const middle = polylineMidpoint(points);
      rendered.label.setPosition({ x: middle.x + (path.text?.x || 0), y: middle.y + (path.text?.y || -8) });
    }
    if (this.selected?.kind === "path" && this.selected.ref === ref) this.positionHandles(ref);
  }

  private addWaypoint(ref: string, point: Point): void {
    if (!this.data) return;
    this.hooks.onEditStart?.();
    const path = this.data.paths[ref];
    const points = this.pathPoints(path);
    path.dots.splice(nearestSegment(points, point), 0, point);
    this.updatePath(ref); this.select({ kind: "path", ref }); this.hooks.onEditEnd?.();
  }

  private selectNode(ref: string, additive: boolean): void {
    if (!additive) { this.select({ kind: "node", ref }); return; }
    const refs = this.selected?.kind === "nodes" ? [...this.selected.refs] : this.selected?.kind === "node" ? [this.selected.ref] : [];
    const index = refs.indexOf(ref);
    if (index >= 0) refs.splice(index, 1); else refs.push(ref);
    this.select(refs.length > 1 ? { kind: "nodes", refs } : refs.length ? { kind: "node", ref: refs[0] } : null);
  }

  private renderResizeHandles(ref: string): void {
    if (!this.data) return;
    const node = this.data.states[ref], corners = ["nw", "ne", "sw", "se"] as const;
    corners.forEach(corner => {
      const handle = this.paper.rect(0, 0, 8, 8).attr({ fill: "#fff", stroke: "#2f7cf6", cursor: `${corner}-resize` });
      let start: Box;
      handle.drag((dx: number, dy: number) => {
        const x = dx / this.zoom, y = dy / this.zoom, next = { ...start }, minimum = 24, maximum = 2000;
        if (corner.includes("e")) next.width = Math.max(minimum, start.width + x);
        if (corner.includes("s")) next.height = Math.max(minimum, start.height + y);
        if (corner.includes("w")) { next.width = Math.max(minimum, start.width - x); next.x = start.x + start.width - next.width; }
        if (corner.includes("n")) { next.height = Math.max(minimum, start.height - y); next.y = start.y + start.height - next.height; }
        next.width = Math.min(maximum, next.width); next.height = Math.min(maximum, next.height);
        if (["start", "end"].includes(node.type)) {
          const size = Math.min(maximum, Math.max(minimum, Math.max(next.width, next.height)));
          if (corner.includes("w")) next.x = start.x + start.width - size;
          if (corner.includes("n")) next.y = start.y + start.height - size;
          next.width = size; next.height = size;
        } else if (["decision", "fork", "join"].includes(node.type)) {
          const ratio = start.width / start.height;
          if (Math.abs(x) >= Math.abs(y)) next.height = next.width / ratio; else next.width = next.height * ratio;
          next.width = Math.min(maximum, Math.max(minimum, next.width)); next.height = Math.min(maximum, Math.max(minimum, next.height));
          if (corner.includes("w")) next.x = start.x + start.width - next.width;
          if (corner.includes("n")) next.y = start.y + start.height - next.height;
        }
        Object.assign(node.attr, next);
        const rendered = this.nodes.get(ref)!;
        this.updateNodeShape(rendered.shape, node); rendered.label.centerIn(node.attr); this.updateConnectedPaths(ref); this.positionResizeHandles(ref);
      }, () => { start = { ...node.attr }; this.hooks.onEditStart?.(); }, () => this.hooks.onEditEnd?.());
      this.resizeHandles.push(handle);
    });
    this.positionResizeHandles(ref);
  }

  private positionResizeHandles(ref: string): void {
    if (!this.data) return;
    const box = this.data.states[ref].attr;
    const points = [{ x: box.x, y: box.y }, { x: box.x + box.width, y: box.y }, { x: box.x, y: box.y + box.height }, { x: box.x + box.width, y: box.y + box.height }];
    this.resizeHandles.forEach((handle, index) => handle.attr({ x: points[index].x - 4, y: points[index].y - 4 }));
  }

  private clearResizeHandles(): void { while (this.resizeHandles.length) this.resizeHandles.pop().remove(); }

  private renderHandles(ref: string): void {
    if (!this.data) return;
    const rendered = this.paths.get(ref), path = this.data.paths[ref];
    if (!rendered || !path) return;
    rendered.handles = path.dots.map((_point, index) => {
      const handle = this.paper.circle(0, 0, 6).attr({ fill: "#fff", stroke: "#2f7cf6", "stroke-width": 2, cursor: "move" });
      let start: Point;
      handle.drag((dx: number, dy: number) => { path.dots[index] = { x: start.x + dx / this.zoom, y: start.y + dy / this.zoom }; this.updatePath(ref); },
        () => { start = { ...path.dots[index] }; this.hooks.onEditStart?.(); }, () => this.hooks.onEditEnd?.());
      handle.dblclick(() => { this.hooks.onEditStart?.(); path.dots.splice(index, 1); this.updatePath(ref); this.select({ kind: "path", ref }); this.hooks.onEditEnd?.(); });
      return handle;
    });
    this.positionHandles(ref);
  }

  private positionHandles(ref: string): void {
    if (!this.data) return;
    const rendered = this.paths.get(ref), path = this.data.paths[ref];
    rendered?.handles.forEach((handle, index) => handle.attr({ cx: path.dots[index]?.x, cy: path.dots[index]?.y }));
  }

  private clearHandles(): void { for (const path of this.paths.values()) { path.handles.forEach(handle => handle.remove()); path.handles = []; } }
  private translateNodes(refs: string[], dx: number, dy: number, translateInternalDots: boolean): void {
    if (!this.data) return;
    const refSet = new Set(refs);
    refs.forEach(ref => { const node = this.data!.states[ref]; node.attr.x += dx; node.attr.y += dy; });
    if (translateInternalDots) Object.values(this.data.paths).forEach(path => { if (refSet.has(path.from) && refSet.has(path.to)) path.dots.forEach(point => { point.x += dx; point.y += dy; }); });
    this.refresh();
  }
  private connectedPathRefs(nodeRef: string): string[] { return this.data ? Object.entries(this.data.paths).filter(([, path]) => path.from === nodeRef || path.to === nodeRef).map(([ref]) => ref) : []; }
  private updateConnectedPaths(nodeRef: string): void { if (this.data) Object.entries(this.data.paths).forEach(([ref, path]) => { if (path.from === nodeRef || path.to === nodeRef) this.updatePath(ref); }); }
  private clearSelectionStyle(): void { for (const node of this.nodes.values()) node.shape.attr({ stroke: "#356aa0", "stroke-width": 2 }); for (const path of this.paths.values()) path.line.attr({ stroke: "#77808a", "stroke-width": 2 }); }
  private viewSize() { return { width: this.host.clientWidth / this.zoom, height: this.host.clientHeight / this.zoom }; }
  private applyViewBox(): void { const size = this.viewSize(); this.paper.setViewBox(this.pan.x, this.pan.y, size.width, size.height, false); }
  private setZoom(value: number): void { const before = this.viewSize(); const centerPoint = { x: this.pan.x + before.width / 2, y: this.pan.y + before.height / 2 }; this.zoom = Math.min(4, Math.max(.25, value)); const after = this.viewSize(); this.pan = { x: centerPoint.x - after.width / 2, y: centerPoint.y - after.height / 2 }; this.applyViewBox(); this.hooks.onZoom?.(Math.round(this.zoom * 100)); }
  private clientToCanvas(clientX: number, clientY: number): Point { const rect = this.host.getBoundingClientRect(); return { x: this.pan.x + (clientX - rect.left) / this.zoom, y: this.pan.y + (clientY - rect.top) / this.zoom }; }
  private onWheel = (event: WheelEvent) => { event.preventDefault(); this.setZoom(this.zoom * (event.deltaY < 0 ? 1.1 : 1 / 1.1)); };
  private onPanStart = (event: MouseEvent) => { if (event.button !== 1 && !(event.button === 0 && event.altKey)) return; event.preventDefault(); this.panning = true; this.panStart = { x: event.clientX, y: event.clientY, viewX: this.pan.x, viewY: this.pan.y }; };
  private onPanMove = (event: MouseEvent) => { if (!this.panning) return; this.pan = { x: this.panStart.viewX - (event.clientX - this.panStart.x) / this.zoom, y: this.panStart.viewY - (event.clientY - this.panStart.y) / this.zoom }; this.applyViewBox(); };
  private onPanEnd = () => { this.panning = false; };
  private onMarqueeStart = (event: MouseEvent) => {
    if (this.readOnly || event.button !== 0 || event.altKey || event.target !== this.svg) return;
    event.preventDefault(); this.marqueeStart = this.clientToCanvas(event.clientX, event.clientY);
    this.marquee = this.paper.rect(this.marqueeStart.x, this.marqueeStart.y, 0, 0).attr({ fill: "#2f7cf6", "fill-opacity": .08, stroke: "#2f7cf6", "stroke-dasharray": "-" });
    window.addEventListener("mousemove", this.onMarqueeMove); window.addEventListener("mouseup", this.onMarqueeEnd, { once: true });
  };
  private onMarqueeMove = (event: MouseEvent) => { if (!this.marqueeStart || !this.marquee) return; const point = this.clientToCanvas(event.clientX, event.clientY); this.marquee.attr({ x: Math.min(this.marqueeStart.x, point.x), y: Math.min(this.marqueeStart.y, point.y), width: Math.abs(point.x - this.marqueeStart.x), height: Math.abs(point.y - this.marqueeStart.y) }); };
  private onMarqueeEnd = () => {
    window.removeEventListener("mousemove", this.onMarqueeMove);
    if (!this.marqueeStart || !this.marquee || !this.data) return;
    const box = this.marquee.attr(), refs = Object.entries(this.data.states).filter(([, node]) => node.attr.x >= box.x && node.attr.y >= box.y && node.attr.x + node.attr.width <= box.x + box.width && node.attr.y + node.attr.height <= box.y + box.height).map(([ref]) => ref);
    this.marquee.remove(); this.marquee = null; this.marqueeStart = null;
    this.select(refs.length > 1 ? { kind: "nodes", refs } : refs.length ? { kind: "node", ref: refs[0] } : null);
  };
}

function diamond(box: Box): string { return `M${box.x + box.width / 2} ${box.y}L${box.x + box.width} ${box.y + box.height / 2}L${box.x + box.width / 2} ${box.y + box.height}L${box.x} ${box.y + box.height / 2}Z`; }
export function polylineMidpoint(points: Point[]): Point {
  if (!points.length) return { x: 0, y: 0 }; if (points.length === 1) return points[0];
  const lengths = points.slice(1).map((point, i) => Math.hypot(point.x - points[i].x, point.y - points[i].y));
  const half = lengths.reduce((sum, value) => sum + value, 0) / 2; let walked = 0;
  for (let i = 0; i < lengths.length; i++) { if (walked + lengths[i] >= half) { const ratio = lengths[i] ? (half - walked) / lengths[i] : 0; return { x: points[i].x + (points[i + 1].x - points[i].x) * ratio, y: points[i].y + (points[i + 1].y - points[i].y) * ratio }; } walked += lengths[i]; }
  return points[points.length - 1];
}
function nearestSegment(points: Point[], point: Point): number { let best = 0, distance = Infinity; for (let i = 0; i < points.length - 1; i++) { const value = segmentDistance(point, points[i], points[i + 1]); if (value < distance) { distance = value; best = i; } } return best; }
function segmentDistance(p: Point, a: Point, b: Point): number { const dx = b.x - a.x, dy = b.y - a.y; const length = dx * dx + dy * dy; const t = length ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / length)) : 0; return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy)); }
