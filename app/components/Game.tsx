"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket, Skull } from "lucide-react";
import { initGame } from "./game-config";
import { mainScene } from "./scenes/main-scene";
import { gameoverScene } from "./scenes/gameover-scene";

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<any>(null);

  const [state, setState] = useState<"loading" | "playing" | "gameover">("loading");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const k = initGame(canvasRef.current);
    gameRef.current = k;

    mainScene(k);
    gameoverScene(k, setScore, setState);

    const startTimeout = setTimeout(() => {
      setState("playing");
      k.go("jogo");

      canvasRef.current?.focus();
    }, 0);

    return () => clearTimeout(startTimeout);
  }, []);

  const handleRestart = () => {
    setState("playing");
    gameRef.current?.go("jogo");
    canvasRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1e2e] p-4">
      <h1 className="text-4xl font-bold text-[#f5c2e7] mb-8 flex items-center gap-2">
        <Rocket className="w-8 h-8" /> Limpador Cósmico
      </h1>

      <div className="relative shadow-2xl rounded-xl border-4 border-[#89b4fa] overflow-hidden">
        <canvas
          ref={canvasRef}
          tabIndex={0}
          className="w-[800px] h-[600px] block outline-none"
        />

        {state === "gameover" && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
            <Skull className="w-20 h-20 text-[#f38ba8] mb-4" />
            <h2 className="text-6xl font-extrabold text-[#f38ba8] mb-4 animate-pulse">
              FIM DE JOGO
            </h2>

            <p className="text-3xl text-white mb-8">
              <span className="font-semibold text-[#a6e3a1]">Pontuação Final:</span>{" "}
              {score}
            </p>

            <button
              onClick={handleRestart}
              className="px-8 py-4 bg-[#89b4fa] text-[#f1f1f1] font-bold text-xl rounded-lg shadow-lg hover:bg-[#74c7e0] transition"
            >
              Recomeçar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
