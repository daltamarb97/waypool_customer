
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveinfoPage } from './reserveinfo';
 
@NgModule({
  declarations: [
    ReserveinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveinfoPage),
  ],

  exports: [
    ReserveinfoPage
  ]
})
export class ConfirmreservationPageModule {}