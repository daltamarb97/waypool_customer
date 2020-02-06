
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverReservetripPage } from './driverReservetrip';


@NgModule({
  declarations: [
    DriverReservetripPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverReservetripPage),
  ],
  exports: [
    DriverReservetripPage
  ]
})
export class DriverReservetripPageModule {}