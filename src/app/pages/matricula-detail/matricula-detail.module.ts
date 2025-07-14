import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatriculaDetailPageRoutingModule } from './matricula-detail-routing.module';

import { MatriculaDetailPage } from './matricula-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatriculaDetailPageRoutingModule
  ],
  declarations: [MatriculaDetailPage]
})
export class MatriculaDetailPageModule {}
