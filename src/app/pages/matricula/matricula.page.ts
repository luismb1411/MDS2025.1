import { Component, OnInit } from "@angular/core";
import { Matricula } from "../../interfaces/matricula";
import { MatriculaData } from "../../providers/matricula-data";

@Component({
  selector: "app-matricula",
  templateUrl: "./matricula.page.html",
  styleUrls: ["./matricula.page.scss"],
})
export class MatriculaPage implements OnInit {
  matriculas: Matricula[] = [];

  constructor(public matriculaData: MatriculaData) {}

  ngOnInit() {}

  ngAftetViewInit() {
    this.atualizarMatriculas();
  }

  atualizarMatriculas() {
    this.matriculas = this.matriculaData.search();
    console.log("Matrículas carregadas:", this.matriculas);
  }
}
