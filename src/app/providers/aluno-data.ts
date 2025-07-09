import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { UserOptions } from "../interfaces/user-options";
import { Aluno } from "../interfaces/aluno";
import { UserData } from "./user-data";

@Injectable({
  providedIn: "root",
})
export class AlunoData {
  alunos: Aluno[] = [];

  constructor(public userData: UserData) {
    let alunos: Aluno[] = [
      {
        matricula: "202014889",
        nome: "LUIS MIGUEL GONÇALVES BARREIRO ",
        ira: 4.2,
        curriculo: "6351/2",
        periodoIngresso: {
          ano: 2018,
          numero: 1,
        },
        curso: {
          codigo: "6351",
          nome: "ENGENHARIA DE REDES DE COMUNICAÇÃO",
          turno: "Diurno",
        },
      },
      {
        matricula: "180001234",
        nome: "JOÃO DA SILVA",
        ira: 4.2,
        curriculo: "6351/2",
        periodoIngresso: {
          ano: 2018,
          numero: 1,
        },
        curso: {
          codigo: "6351",
          nome: "ENGENHARIA DE REDES DE COMUNICAÇÃO",
          turno: "Diurno",
        },
      },
    ];

    for (let aluno of alunos) {
      this.alunos.push(aluno);
    }
  }

  detail(matricula: string) {
    for (let aluno of this.alunos) {
      if (aluno.matricula == matricula) {
        return aluno;
      }
    }
    return null;
  }
}
