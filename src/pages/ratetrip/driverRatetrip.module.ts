
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverRatetripPage } from './driverRatetrip';
 
@NgModule({
  declarations: [
    DriverRatetripPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverRatetripPage),
  ],
  exports: [
    DriverRatetripPage
  ]
})
export class DriverRatetripPageModule {}