import { Disciplina } from "./disciplina";
import { PeriodoLetivo } from "./periodoLetivo";

export interface Turma {
  id?: string;
  disciplina: Disciplina;
  periodoLetivo?: PeriodoLetivo;
  codigo: string;
  modalidade?: string;
  status?: string;
  vagasOfertadas?: number;
  vagasOcupadas?: number;
  horario?: Horario[];
}

export interface Horario {
  dia: string;
  horaInicio: string;
  horaFim?: string;
}
