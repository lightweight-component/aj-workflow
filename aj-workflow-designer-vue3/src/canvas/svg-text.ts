import type { Box, Point } from "@/domain/workflow";

const SVG_NS: string = "http://www.w3.org/2000/svg";

/** 命令式 SVG 文本对象；它不属于 Vue 响应式状态。 */
export class SvgText {
  readonly element: SVGTextElement;

  /** 创建 SVG 文本元素并挂载到指定容器。 */
  constructor(container: SVGElement, text: string) {
    this.element = document.createElementNS(SVG_NS, "text") as SVGTextElement;
    this.element.classList.add("workflow-label");
    this.setText(text);
    container.appendChild(this.element);
  }

  /** 更新文本内容。 */
  setText(value: string): void {
    this.element.textContent = value;
  }

  /** 将文本移动到指定画布坐标。 */
  setPosition(point: Point): void {
    this.element.setAttribute("x", String(point.x));
    this.element.setAttribute("y", String(point.y));
  }

  /** 将文本居中放置在指定矩形中。 */
  centerIn(box: Box): void {
    this.element.setAttribute("text-anchor", "middle");
    this.element.setAttribute("dominant-baseline", "middle");
    this.setPosition({ x: box.x + box.width / 2, y: box.y + box.height / 2 });
  }

  /** 从 SVG 文档中移除文本元素。 */
  remove(): void {
    this.element.remove();
  }
}
