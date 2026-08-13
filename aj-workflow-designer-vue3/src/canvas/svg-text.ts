import type { Box, Point } from "@/domain/workflow";

const SVG_NS = "http://www.w3.org/2000/svg";

/** 命令式 SVG 文本对象；它不属于 Vue 响应式状态。 */
export class SvgText {
  readonly element: SVGTextElement;

  constructor(container: SVGElement, text: string) {
    this.element = document.createElementNS(SVG_NS, "text");
    this.element.classList.add("workflow-label");
    this.setText(text);
    container.appendChild(this.element);
  }

  setText(value: string): void { this.element.textContent = value; }

  setPosition(point: Point): void {
    this.element.setAttribute("x", String(point.x));
    this.element.setAttribute("y", String(point.y));
  }

  centerIn(box: Box): void {
    this.element.setAttribute("text-anchor", "middle");
    this.element.setAttribute("dominant-baseline", "middle");
    this.setPosition({ x: box.x + box.width / 2, y: box.y + box.height / 2 });
  }

  remove(): void { this.element.remove(); }
}
