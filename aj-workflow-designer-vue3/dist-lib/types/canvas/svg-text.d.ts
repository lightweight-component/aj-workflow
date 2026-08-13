import type { Box, Point } from "@/domain/workflow";
/** 命令式 SVG 文本对象；它不属于 Vue 响应式状态。 */
export declare class SvgText {
    readonly element: SVGTextElement;
    /** 创建 SVG 文本元素并挂载到指定容器。 */
    constructor(container: SVGElement, text: string);
    /** 更新文本内容。 */
    setText(value: string): void;
    /** 将文本移动到指定画布坐标。 */
    setPosition(point: Point): void;
    /** 将文本居中放置在指定矩形中。 */
    centerIn(box: Box): void;
    /** 从 SVG 文档中移除文本元素。 */
    remove(): void;
}
