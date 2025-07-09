import { Aluno } from "./aluno";
import { Turma } from "./turma";

export interface Matricula {
  id?: string;
  aluno?: Aluno;
  turma?: Turma;
  status: string;
  motivoIndeferimento?: string;
  prioridade?: number;
  horaCiracao?: string;
}
