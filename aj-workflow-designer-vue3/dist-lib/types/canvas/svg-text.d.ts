import type { Box, Point } from "@/domain/workflow";
/** 命令式 SVG 文本对象；它不属于 Vue 响应式状态。 */
export declare class SvgText {
    readonly element: SVGTextElement;
    constructor(container: SVGElement, text: string);
    setText(value: string): void;
    setPosition(point: Point): void;
    centerIn(box: Box): void;
    remove(): void;
}
