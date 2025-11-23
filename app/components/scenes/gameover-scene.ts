import { KAPLAYCtx } from "kaplay";

export const gameoverScene = (k: KAPLAYCtx, setScore: React.Dispatch<React.SetStateAction<number>>, setState: React.Dispatch<React.SetStateAction<"gameover" | "loading" | "playing">>) => {
  k.scene("derrota", (final) => {
    setScore(final);
    setState("gameover");

    k.add([
      k.text("FIM DE JOGO!", { size: 48 }),
      k.pos(k.width() / 2, k.height() / 2),
      "origin",
      k.color(243, 139, 168),
    ]);
  });
};
