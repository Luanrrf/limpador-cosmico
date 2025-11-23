import kaplay, { KAPLAYCtx } from "kaplay";

export const initGame = (canvas: HTMLCanvasElement): KAPLAYCtx => {
  return kaplay({
    width: 800,
    height: 600,
    canvas,
    background: [0, 0, 0, 1],
    font: "monospace",
  });
};
