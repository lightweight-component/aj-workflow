import type { Box, Point } from "@/domain/workflow";

/** 计算矩形的中心坐标。 */
export function center(box: Box): Point {
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
}

/** 返回矩形边界与“矩形中心到目标点”射线的交点。 */
export function connectionPoint(box: Box, target: Point): Point {
  const origin = center(box);
  const dx = target.x - origin.x;
  const dy = target.y - origin.y;
  if (dx === 0 && dy === 0) {
    return origin;
  }
  const scale = 1 / Math.max(Math.abs(dx) / (box.width / 2), Math.abs(dy) / (box.height / 2));
  return { x: origin.x + dx * scale, y: origin.y + dy * scale };
}
