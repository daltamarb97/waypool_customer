
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservetripPage } from './reservetrip';


@NgModule({
  declarations: [
    ReservetripPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservetripPage),
  ],
  exports: [
    ReservetripPage
  ]
})
export class ReservetripPageModule {}