import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { Turma } from "../interfaces/turma";

@Injectable({
  providedIn: "root",
})
export class TurmaData {
  turmas: Turma[] = [];

  constructor(public storage: Storage) {
    let turmas: Turma[] = [
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0026",
          nome: "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0334",
          nome: "COMPUTACAO PARA ENGENHARIA",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "QUI",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "G",
        disciplina: {
          codigo: "IFD0171",
          nome: "FISICA 1",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "QUA",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "IFD0173",
          nome: "FISICA 1 EXPERIMENTAL",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "F",
        disciplina: {
          codigo: "IFD0173",
          nome: "FISICA 1 EXPERIMENTAL",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEX",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
      {
        codigo: "C",
        disciplina: {
          codigo: "MAT0025",
          nome: "CALCULO 1",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "QUI",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "SEX",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
      {
        codigo: "J",
        disciplina: {
          codigo: "MAT0025",
          nome: "CALCULO 1",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUA",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "SEX",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "D",
        disciplina: {
          codigo: "MAT0031",
          nome: "INTRODUCAO A ALGEBRA LINEAR",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
          {
            dia: "QUA",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0013",
          nome: "ALGORITMOS E ESTRUTURA DE DADOS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
          {
            dia: "QUA",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0039",
          nome: "SISTEMAS DIGITAIS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
          {
            dia: "QUA",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "B",
        disciplina: {
          codigo: "ENE0039",
          nome: "SISTEMAS DIGITAIS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "TER",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0040",
          nome: "LABORATÓRIO DE SISTEMAS DIGITAIS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "QUI",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "B",
        disciplina: {
          codigo: "ENE0040",
          nome: "LABORATÓRIO DE SISTEMAS DIGITAIS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "TER",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "B",
        disciplina: {
          codigo: "EST0023",
          nome: "PROBABILIDADE E ESTATISTICA",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "QUA",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "SEX",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "H",
        disciplina: {
          codigo: "EST0023",
          nome: "PROBABILIDADE E ESTATISTICA",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUA",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "SEX",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "E",
        disciplina: {
          codigo: "IFD0175",
          nome: "FISICA 2",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "QUA",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
      {
        codigo: "F",
        disciplina: {
          codigo: "MAT0031",
          nome: "CALCULO 2",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "QUI",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "SEX",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
      {
        codigo: "K",
        disciplina: {
          codigo: "MAT0026",
          nome: "CALCULO 2",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUA",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "SEX",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0022",
          nome: "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
          {
            dia: "QUI",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0056",
          nome: "SISTEMAS MICROPROCESSADOS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "QUA",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0058",
          nome: "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0067",
          nome: "SINAIS E SISTEMAS EM TEMPO CONTÍNUO",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUI",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "ENE0274",
          nome: "FUNDAMENTOS DE REDES",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
          {
            dia: "QUI",
            horaInicio: "10:00",
            horaFim: "11:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "IFD0177",
          nome: "FISICA 2 EXPERIMENTAL",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "QUI",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUI",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "F",
        disciplina: {
          codigo: "IFD0177",
          nome: "FISICA 2 EXPERIMENTAL",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "TER",
            horaInicio: "16:00",
            horaFim: "17:50",
          },
        ],
      },
      {
        codigo: "A",
        disciplina: {
          codigo: "MAT0027",
          nome: "CALCULO 3",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "SEG",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "QUA",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
          {
            dia: "SEX",
            horaInicio: "14:00",
            horaFim: "15:50",
          },
        ],
      },
      {
        codigo: "B",
        disciplina: {
          codigo: "MAT0027",
          nome: "CALCULO 3",
        },
        periodoLetivo: {
          ano: 2024,
          numero: 2,
        },
        vagasOfertadas: 10,
        vagasOcupadas: 0,
        horario: [
          {
            dia: "TER",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "QUI",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
          {
            dia: "SEX",
            horaInicio: "8:00",
            horaFim: "9:50",
          },
        ],
      },
    ];

    for (let turma of turmas) {
      this.turmas.push(turma);
    }
  }

  search(params?: any) {
    if (!params) {
      return this.turmas;
    }
    if ("disciplina" in params) {
      return this.turmas.filter((turma) => {
        if (turma.disciplina.codigo == params.disciplina) {
          return turma;
        }
        return null;
      });
    }
  }
}
