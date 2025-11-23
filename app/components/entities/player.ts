import { KAPLAYCtx } from "kaplay";

type PlayerKeys = {
  left: string;
  right: string;
  up: string;
  down: string;
};

export const createPlayer = (
  k: KAPLAYCtx,
  id: string,
  speed: number,
  keys: PlayerKeys
) => {
  const p = k.add([
    k.rect(20, 20),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(137, 180, 250),
    "origin",
    k.scale(1),
    id,
    k.area(),
    k.body(),
  ]) as any;

  k.onKeyDown(keys.left, () => p.move(-speed, 0));
  k.onKeyDown(keys.right, () => p.move(speed, 0));
  k.onKeyDown(keys.up, () => p.move(0, -speed));
  k.onKeyDown(keys.down, () => p.move(0, speed));

  p.onUpdate(() => {
    const scaleX =
      typeof p.scale === "number" ? p.scale : (p.scale && p.scale.x) ?? 1;
    const scaleY =
      typeof p.scale === "number" ? p.scale : (p.scale && p.scale.y) ?? 1;

    const originX =
      p.origin && typeof p.origin.x === "number" ? p.origin.x : 0;
    const originY =
      p.origin && typeof p.origin.y === "number" ? p.origin.y : 0;

    const w = p.width * scaleX;
    const h = p.height * scaleY;

    const minX = originX * w;
    const maxX = k.width() - (1 - originX) * w;
    const minY = originY * h;
    const maxY = k.height() - (1 - originY) * h;

    p.pos.x = k.clamp(p.pos.x, minX, maxX);
    p.pos.y = k.clamp(p.pos.y, minY, maxY);
  });

  return p;
};
