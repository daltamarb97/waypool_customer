
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverDetailsReservePage } from './driverDetailsreserve';

 
@NgModule({
  declarations: [
    DriverDetailsReservePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverDetailsReservePage),
  ],
  exports: [
    DriverDetailsReservePage
  ]
})
export class DriverDetailsReservePagePageModule {}