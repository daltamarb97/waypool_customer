import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmReservationPage } from './confirm-reservation';

@NgModule({
  declarations: [
    ConfirmReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmReservationPage),
  ],
  exports: [
    ConfirmReservationPage
  ]
})
export class ConfirmReservationPageModule {}
