import { UnidadeOrganizacional } from "./unidadeOrganizacional";

export interface Disciplina {
  codigo: string;
  nome: string;
  modalidade?: string;
  cargaHorariaTotal?: number;
  cargaHorariaPresencial?: DisciplinaCargaHoraria;
  cargaHorariaEad?: DisciplinaCargaHoraria;
  unidadeOrganizacional?: UnidadeOrganizacional;
  preRequisito?: Disciplina[];
}

export interface DisciplinaCargaHoraria {
  teorica: number;
  pratica: number;
  extensionista: number;
}
