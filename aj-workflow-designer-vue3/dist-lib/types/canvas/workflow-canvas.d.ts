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
    /** 创建 Raphael 画布并注册缩放、平移和框选事件。 */
    constructor(host: HTMLElement, hooks: CanvasHooks, readOnly?: boolean);
    /** 切换只读状态并刷新当前选择的交互控件。 */
    setReadOnly(value: boolean): void;
    /** 清空画布并加载完整流程模型。 */
    load(data: WorkflowDefinition): void;
    /** 按当前业务模型刷新全部节点、标签和连线。 */
    refresh(): void;
    /** 注销事件并销毁 Raphael 资源。 */
    destroy(): void;
    /** 按容器当前尺寸调整画布。 */
    resize(): void;
    /** 放大画布视图。 */
    zoomIn(): void;
    /** 缩小画布视图。 */
    zoomOut(): void;
    /** 恢复 100% 缩放和初始平移位置。 */
    resetView(): void;
    /** 将当前节点选择按指定距离整体移动。 */
    moveSelection(dx: number, dy: number): void;
    /** 按指定边缘或中心线对齐已选择节点。 */
    alignSelection(mode: "left" | "center" | "right" | "top" | "middle" | "bottom"): void;
    /** 将三个及以上选中节点按指定方向等间距分布。 */
    distributeSelection(axis: "horizontal" | "vertical"): void;
    /** 调整视图，使全部节点进入可视区域。 */
    fitToContent(): void;
    /** 将指定节点或连线移动到视图中心并选中。 */
    focus(selection: Selection): void;
    /** 更新当前选择及对应的高亮、缩放柄或拐点柄。 */
    select(selection: Selection): void;
    /** 绘制一个节点并绑定选择与拖动交互。 */
    private drawNode;
    /** 绘制一条流程连线并绑定选择和拐点创建交互。 */
    private drawPath;
    /** 根据节点类型和尺寸更新对应 SVG 图形。 */
    private updateNodeShape;
    /** 计算连线端点及全部中间拐点。 */
    private pathPoints;
    /** 按模型重新绘制指定连线及其文字。 */
    private updatePath;
    /** 在距离点击位置最近的线段中插入拐点。 */
    private addWaypoint;
    /** 处理普通选择或组合键追加选择。 */
    private selectNode;
    /** 为单个节点绘制四角尺寸调整柄。 */
    private renderResizeHandles;
    /** 将尺寸调整柄移动到节点四角。 */
    private positionResizeHandles;
    /** 移除全部节点尺寸调整柄。 */
    private clearResizeHandles;
    /** 为指定连线绘制可拖动拐点柄。 */
    private renderHandles;
    /** 将拐点柄同步到模型坐标。 */
    private positionHandles;
    /** 移除所有连线拐点柄。 */
    private clearHandles;
    /** 平移节点，并按需同步平移选区内部连线的拐点。 */
    private translateNodes;
    /** 返回与指定节点相连的连线引用。 */
    private connectedPathRefs;
    /** 刷新与指定节点相连的全部连线。 */
    private updateConnectedPaths;
    /** 清除节点和连线的选择高亮。 */
    private clearSelectionStyle;
    /** 返回当前缩放级别下的画布可视尺寸。 */
    private viewSize;
    /** 将缩放和平移状态应用到 SVG viewBox。 */
    private applyViewBox;
    /** 限制并设置缩放比例，同时保持视图中心不变。 */
    private setZoom;
    /** 将浏览器客户区坐标转换为流程画布坐标。 */
    private clientToCanvas;
    /** 处理滚轮缩放。 */
    private onWheel;
    /** 在中键或 Alt+左键按下时开始平移画布。 */
    private onPanStart;
    /** 按鼠标移动距离更新画布平移位置。 */
    private onPanMove;
    /** 结束画布平移。 */
    private onPanEnd;
    /** 在画布空白区域开始绘制框选矩形。 */
    private onMarqueeStart;
    /** 根据鼠标位置更新框选矩形。 */
    private onMarqueeMove;
    /** 结束框选并选中完全位于矩形内的节点。 */
    private onMarqueeEnd;
}
/** 按折线实际长度计算中点。 */
export declare function polylineMidpoint(points: Point[]): Point;
