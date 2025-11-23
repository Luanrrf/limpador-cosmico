import { KAPLAYCtx } from "kaplay";
import { createPlayer } from "../entities/player";
import { createEnemy } from "../entities/enemy";
import { createScore } from "../entities/score";
import { spawnDetrito } from "../systems/spawn-detrito";

export const mainScene = (k: KAPLAYCtx) => {
  const PONTOS = 10;
  const LIMITE = 15;

  const PLAYER1 = "nave1";
  const PLAYER2 = "nave2";
  const ENEMY = "pirata";
  const DETRITO = "detrito";

  k.scene("jogo", () => {
    let pontuacao = 0;

    const score = createScore(k);

    const p1 = createPlayer(k, PLAYER1, 320, {
      left: "left",
      right: "right",
      up: "up",
      down: "down",
    });

    const p2 = createPlayer(k, PLAYER2, 320, {
      left: "a",
      right: "d",
      up: "w",
      down: "s",
    });

    const enemy = createEnemy(k, ENEMY);
    
    k.onUpdate(() => {
      const aceleracao = pontuacao * 0.3;

      p1.speed = 320 + aceleracao;
      p2.speed = 320 + aceleracao;
      enemy.speed = 60 + aceleracao;
    });

    k.onUpdate("seguir_jogador", (e) => {
      const dist1 = p1.pos.dist(e.pos);
      const dist2 = p2.pos.dist(e.pos);
      const alvo = dist1 < dist2 ? p1 : p2;
      const dir = alvo.pos.sub(e.pos).unit();
      e.move(dir.scale(enemy.speed));
    });

    k.loop(1, () => {
      if (k.get(DETRITO).length < LIMITE) spawnDetrito(k, DETRITO);
    });

    const coletar = (player, d) => {
      k.destroy(d);
      pontuacao += PONTOS;
      score.text = `Pontos: ${pontuacao}`;

      player.scale = k.vec2(1.2);
      k.wait(0.1, () => (player.scale = k.vec2(1)));
    };

    p1.onCollide(DETRITO, (d) => coletar(p1, d));
    p2.onCollide(DETRITO, (d) => coletar(p2, d));

    const morrer = () => k.go("derrota", pontuacao);

    p1.onCollide(ENEMY, morrer);
    p2.onCollide(ENEMY, morrer);
  });
};
