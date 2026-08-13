import type { Box, Point } from "@/domain/workflow";
export declare function center(box: Box): Point;
/** 返回矩形边界与“矩形中心到目标点”射线的交点。 */
export declare function connectionPoint(box: Box, target: Point): Point;
