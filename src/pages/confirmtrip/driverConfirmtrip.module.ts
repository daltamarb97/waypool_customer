
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverConfirmtripPage } from './driverConfirmtrip';
 
@NgModule({
  declarations: [
    DriverConfirmtripPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverConfirmtripPage),
  ],
  exports: [
    DriverConfirmtripPage
  ]
})
export class DriverConfirmtripPageModule {}