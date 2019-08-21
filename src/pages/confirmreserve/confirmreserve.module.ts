
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ConfirmreservationPage } from './confirmreserve';
 
@NgModule({
  declarations: [
    ConfirmreservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmreservationPage),
  ],
  exports: [
    ConfirmreservationPage
  ]
})
export class ConfirmreservationPageModule {}