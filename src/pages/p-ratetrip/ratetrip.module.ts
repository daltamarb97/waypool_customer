import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatetripPage } from './ratetrip';

@NgModule({
  declarations: [
    RatetripPage,
  ],
  imports: [
    IonicPageModule.forChild(RatetripPage),
  ],
  exports: [
    RatetripPage
  ]
})
export class RatetripPageModule {}
