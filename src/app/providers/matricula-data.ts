import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { Matricula } from "../interfaces/matricula";

@Injectable({
  providedIn: "root",
})
export class MatriculaData {
  matriculas: Matricula[] = [];
  matriculaConfirmada = false;

  constructor(public storage: Storage) {
    let matriculas: Matricula[] = [
      {
        id: "ENE0022-A",
        status: "PreMatricula",
        turma: {
          codigo: "A",
          disciplina: {
            codigo: "ENE0022",
            nome: "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
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
      },
      {
        id: "ENE0056-A",
        status: "PreMatricula",
        turma: {
          codigo: "A",
          disciplina: {
            codigo: "ENE0056",
            nome: "SISTEMAS MICROPROCESSADOS",
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
      },
      {
        id: "ENE0058-A",
        status: "PreMatricula",
        turma: {
          codigo: "A",
          disciplina: {
            codigo: "ENE0058",
            nome: "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS",
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
      },
      {
        id: "ENE0067-A",
        status: "PreMatricula",
        turma: {
          codigo: "A",
          disciplina: {
            codigo: "ENE0067",
            nome: "SINAIS E SISTEMAS EM TEMPO CONTÍNUO",
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
      },
      {
        id: "ENE0274-A",
        status: "PreMatricula",
        turma: {
          codigo: "A",
          disciplina: {
            codigo: "ENE0274",
            nome: "FUNDAMENTOS DE REDES",
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
      },
    ];

    for (let matricula of matriculas) {
      this.matriculas.push(matricula);
    }
  }

  detail(id: string) {
    for (let matricula of this.matriculas) {
      if (matricula.id == id) {
        return matricula;
      }
    }
    return null;
  }

  search(params?: any) {
    if (!params) {
      return this.matriculas;
    }

    return this.matriculas.filter((matricula) => {
      for (let key in params) {
        let field = matricula[key];
        if (
          typeof field == "string" &&
          field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0
        ) {
          return matricula;
        } else if (field == params[key]) {
          return matricula;
        }
      }
      return null;
    });
  }

  add(matricula: Matricula) {
    matricula.id =
      matricula.turma.disciplina.codigo + "-" + matricula.turma.codigo;
    this.matriculas.push(matricula);
  }

  patchStatus(id: string, status: string) {
    for (let matricula of this.matriculas) {
      if (matricula.id == id) {
        matricula.status = status;
      }
    }
  }

  delete(id: string) {
    for (var i = 0; i < this.matriculas.length; i++) {
      if (this.matriculas[i].id == id) {
        this.matriculas.splice(i);
      }
    }
  }

  confirmarMatricula() {
    this.matriculaConfirmada = true;
  }

  verificarMatriculaConfirmada() {
    return this.matriculaConfirmada;
  }
}
