
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSupportPage } from './driverSupport';
 
@NgModule({
  declarations: [
    DriverSupportPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSupportPage),
  ],
  exports: [
    DriverSupportPage
  ]
})
export class DriverSupportPageModule {}