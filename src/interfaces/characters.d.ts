import { Player } from "interfaces/characters";

export interface Character extends Player {
  NOME: string;
  VELOCIDADE: number;
  MANOBRABILIDADE: number;
  PODER: number;
  PONTOS: number;
}
