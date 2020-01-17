
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmtripPage } from './confirmtrip';
 
@NgModule({
  declarations: [
    ConfirmtripPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmtripPage),
  ],
  exports: [
    ConfirmtripPage
  ]
})
export class ConfirmtripPageModule {}