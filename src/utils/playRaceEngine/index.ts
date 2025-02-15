import { Character } from "interfaces/characters";
import { player1, player2 } from "players";
import { rollDice } from "utils/rollDice";

// função para gerar aleatoriamente os blocos
async function getRandomBlock() {
  let random = Math.random();
  let result = "";

  switch (true) {
    case random < 0.33:
      result = " RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

// função do log de resultados
async function logRollResult(
  characterName: string,
  block: string,
  diceResult: number,
  attribute: number
) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} com ${diceResult}`
  );
}

// função de começar a corrida
export async function playRaceEngine(
  character1: Character,
  character2: Character
) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character1.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character1.MANOBRABILIDADE;
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
    }
  }
}
