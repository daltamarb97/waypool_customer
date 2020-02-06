
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverCanceltripPage } from './driverCanceltrip';
 
@NgModule({
  declarations: [
    DriverCanceltripPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverCanceltripPage),
  ],
  exports: [
    DriverCanceltripPage
  ]
})
export class DriverCanceltripPageModule {}