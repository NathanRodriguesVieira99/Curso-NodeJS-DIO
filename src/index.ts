import { playRaceEngine } from "utils/playRaceEngine";
import { player1, player2 } from "./players/index";

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );

  await playRaceEngine(player1, player2);
})();
