
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPickupPage } from './pickup';
 
@NgModule({
  declarations: [
    DriverPickupPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPickupPage),
  ],
  exports: [
    DriverPickupPage
  ]
})
export class DriverPickupPageModule {}