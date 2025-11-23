import { KAPLAYCtx } from "kaplay";

export const createEnemy = (k: KAPLAYCtx, id: string) => {
  return k.add([
    k.circle(30),
    k.pos(100, 100),
    k.color(243, 139, 168),
    "origin",
    id,
    k.area(),
    k.body(),
    "seguir_jogador",
  ]) as any;
};
