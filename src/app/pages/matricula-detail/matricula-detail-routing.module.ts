import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatriculaDetailPage } from './matricula-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MatriculaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaDetailPageRoutingModule {}
