import { KAPLAYCtx } from "kaplay";

export const spawnDetrito = (k: KAPLAYCtx, id: string) => {
  const x = k.rand(0, k.width());
  const y = k.rand(0, k.height());

  k.add([
    k.rect(10, 10),
    k.pos(x, y),
    k.color(94, 92, 94),
    "origin",
    k.opacity(1),
    k.area(),
    id,
    k.lifespan(15, { fade: 0.5 }),
  ]);
};
