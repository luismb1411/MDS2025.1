import { PeriodoLetivo } from "./periodoLetivo";
import { Curso } from "./curso";

export interface Aluno {
  matricula: string;
  nome: string;
  ira?: number;
  periodoIngresso?: PeriodoLetivo;
  curso?: Curso;
  curriculo?: string;
}
