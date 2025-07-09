import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Disciplina } from '../interfaces/disciplina';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaData {
  disciplinas: Disciplina[] = [];

  constructor(
    public storage: Storage
  ) {
    let disciplinas: Disciplina[] = [
      {
        "codigo": "ENE0026",
        "nome": "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
        "modalidade": "presencial",
        "cargaHorariaTotal": 30,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 0,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0334",
        "nome": "COMPUTACAO PARA ENGENHARIA",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "IFD0171",
        "nome": "FISICA 1",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "IFD",
          "nome": "INSTITUTO DE FÍSICA"
        }
      }, {
        "codigo": "IFD0173",
        "nome": "FISICA 1 EXPERIMENTAL",
        "modalidade": "presencial",
        "cargaHorariaTotal": 30,
        "cargaHorariaPresencial": {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "IFD",
          "nome": "INSTITUTO DE FÍSICA"
        }
      }, {
        "codigo": "MAT0025",
        "nome": "CÁLCULO 1",
        "modalidade": "presencial",
        "cargaHorariaTotal": 90,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 60,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "MAT",
          "nome": "DEPARTAMENTO DE MATEMÁTICA"
        }
      }, {
        "codigo": "MAT0031",
        "nome": "INTRODUCAO A ALGEBRA LINEAR",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "unidadeOrganizacional": {
          "codigo": "MAT",
          "nome": "DEPARTAMENTO DE MATEMÁTICA"
        }
      }, {
        "codigo": "ENE0013",
        "nome": "ALGORITMOS E ESTRUTURA DE DADOS",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0334",
            "nome": "COMPUTACAO PARA ENGENHARIA",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0039",
        "nome": "SISTEMAS DIGITAIS",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0334",
            "nome": "COMPUTACAO PARA ENGENHARIA",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0040",
        "nome": "LABORATÓRIO DE SISTEMAS DIGITAIS",
        "modalidade": "presencial",
        "cargaHorariaTotal": 30,
        "cargaHorariaPresencial": {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0334",
            "nome": "COMPUTACAO PARA ENGENHARIA",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "EST0023",
        "nome": "PROBABILIDADE E ESTATÍSTICA",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "MAT0025",
            "nome": "CÁLCULO 1",
            "unidadeOrganizacional": {
              "codigo": "MAT",
              "nome": "DEPARTAMENTO DE MATEMÁTICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "EST",
          "nome": "DEPARTAMENTO DE ESTATÍSTICA"
        }
      }, {
        "codigo": "IFD0175",
        "nome": "FISICA 2",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "MAT0025",
            "nome": "CÁLCULO 1",
            "unidadeOrganizacional": {
              "codigo": "MAT",
              "nome": "DEPARTAMENTO DE MATEMÁTICA"
            }
          },
          {
            "codigo": "IFD0171",
            "nome": "FISICA 1",
            "unidadeOrganizacional": {
              "codigo": "IFD",
              "nome": "INSTITUTO DE FÍSICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "IFD",
          "nome": "INSTITUTO DE FÍSICA"
        }
      }, {
        "codigo": "MAT0026",
        "nome": "CÁLCULO 2",
        "modalidade": "presencial",
        "cargaHorariaTotal": 90,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "MAT0025",
            "nome": "CÁLCULO 1",
            "unidadeOrganizacional": {
              "codigo": "MAT",
              "nome": "DEPARTAMENTO DE MATEMÁTICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "MAT",
          "nome": "DEPARTAMENTO DE MATEMÁTICA"
        }
      }, {
        "codigo": "ENE0022",
        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 0,
          "pratica": 60,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0334",
            "nome": "COMPUTACAO PARA ENGENHARIA",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "ENE0013",
            "nome": "ALGORITMOS E ESTRUTURA DE DADOS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0056",
        "nome": "SISTEMAS MICROPROCESSADOS",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0039",
            "nome": "SISTEMAS DIGITAIS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "ENE0040",
            "nome": "LABORATÓRIO DE SISTEMAS DIGITAIS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0058",
        "nome": "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS",
        "modalidade": "presencial",
        "cargaHorariaTotal": 30,
        "cargaHorariaPresencial": {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "ENE0039",
            "nome": "SISTEMAS DIGITAIS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "ENE0040",
            "nome": "LABORATÓRIO DE SISTEMAS DIGITAIS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0067",
        "nome": "SINAIS E SISTEMAS EM TEMPO CONTÍNUO",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "MAT0026",
            "nome": "CÁLCULO 2",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "MAT0031",
            "nome": "INTRODUCAO A ALGEBRA LINEAR",
            "unidadeOrganizacional": {
              "codigo": "MAT",
              "nome": "DEPARTAMENTO DE MATEMÁTICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "ENE0274",
        "nome": "FUNDAMENTOS DE REDES",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "EST0023",
            "nome": "PROBABILIDADE E ESTATÍSTICA",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "ENE0013",
            "nome": "ALGORITMOS E ESTRUTURA DE DADOS",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "ENE",
          "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
        }
      }, {
        "codigo": "IFD0177",
        "nome": "FISICA 2 EXPERIMENTAL",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 0,
          "pratica": 60,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "IFD0173",
            "nome": "FISICA 1 EXPERIMENTAL",
            "unidadeOrganizacional": {
              "codigo": "ENE",
              "nome": "DEPARTAMENTO DE ENGENHARIA ELÉTRICA"
            }
          },
          {
            "codigo": "IFD0171",
            "nome": "FISICA 1",
            "unidadeOrganizacional": {
              "codigo": "IFD",
              "nome": "INSTITUTO DE FÍSICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "IFD",
          "nome": "INSTITUTO DE FÍSICA"
        }
      }, {
        "codigo": "MAT0027",
        "nome": "CÁLCULO 3",
        "modalidade": "presencial",
        "cargaHorariaTotal": 60,
        "cargaHorariaPresencial": {
          "teorica": 60,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo": "MAT0026",
            "nome": "CÁLCULO 2",
            "unidadeOrganizacional": {
              "codigo": "MAT",
              "nome": "DEPARTAMENTO DE MATEMÁTICA"
            }
          }
        ],
        "unidadeOrganizacional": {
          "codigo": "MAT",
          "nome": "DEPARTAMENTO DE MATEMÁTICA"
        }
      }
    ];

    for (let disciplina of disciplinas) {
      this.disciplinas.push(disciplina);
    }
  }



  query(params?: any) {
    if (!params || Object.keys(params).length === 0) {
      return this.disciplinas;
    }

    return this.disciplinas.filter((disciplina) => {
      for (let key in params) {
        let field = disciplina[key].toString();
        if (typeof field == 'string' && this.removeAcento(field).indexOf(this.removeAcento(params[key])) >= 0) {
          return disciplina;
        } else if (field == params[key]) {
          return disciplina;
        }
      }
      return null;;
    });
  }

  removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
  }

}
