import { KAPLAYCtx } from "kaplay";

export const createScore = (k: KAPLAYCtx) => {
  return k.add([
    k.text("Pontos: 0", { size: 32 }),
    k.pos(16, 16),
    k.fixed(),
    k.color(255, 255, 255),
    { value: 0 },
  ]);
};
