import type { Point, WorkflowDefinition } from "@/domain/workflow";
export type Selection = {
    kind: "node";
    ref: string;
} | {
    kind: "nodes";
    refs: string[];
} | {
    kind: "path";
    ref: string;
} | null;
export interface CanvasHooks {
    onSelect(selection: Selection): void;
    onZoom?(percentage: number): void;
    onEditStart?(): void;
    onEditEnd?(): void;
}
/** Raphael 命令式画布；Vue 只持有业务模型和选择标识。 */
export declare class WorkflowCanvas {
    private readonly host;
    private readonly hooks;
    private readonly paper;
    private readonly svg;
    private readonly nodes;
    private readonly paths;
    private data;
    private selected;
    private readonly resizeHandles;
    private readOnly;
    private zoom;
    private pan;
    private panning;
    private panStart;
    private marquee;
    private marqueeStart;
    constructor(host: HTMLElement, hooks: CanvasHooks, readOnly?: boolean);
    setReadOnly(value: boolean): void;
    load(data: WorkflowDefinition): void;
    refresh(): void;
    destroy(): void;
    resize(): void;
    zoomIn(): void;
    zoomOut(): void;
    resetView(): void;
    moveSelection(dx: number, dy: number): void;
    alignSelection(mode: "left" | "center" | "right" | "top" | "middle" | "bottom"): void;
    distributeSelection(axis: "horizontal" | "vertical"): void;
    fitToContent(): void;
    focus(selection: Selection): void;
    select(selection: Selection): void;
    private drawNode;
    private drawPath;
    private updateNodeShape;
    private pathPoints;
    private updatePath;
    private addWaypoint;
    private selectNode;
    private renderResizeHandles;
    private positionResizeHandles;
    private clearResizeHandles;
    private renderHandles;
    private positionHandles;
    private clearHandles;
    private translateNodes;
    private connectedPathRefs;
    private updateConnectedPaths;
    private clearSelectionStyle;
    private viewSize;
    private applyViewBox;
    private setZoom;
    private clientToCanvas;
    private onWheel;
    private onPanStart;
    private onPanMove;
    private onPanEnd;
    private onMarqueeStart;
    private onMarqueeMove;
    private onMarqueeEnd;
}
export declare function polylineMidpoint(points: Point[]): Point;
