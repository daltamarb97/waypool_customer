
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverMorePage } from './driverMore';
 
@NgModule({
  declarations: [
    DriverMorePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverMorePage),
  ],
  exports: [
    DriverMorePage
  ]
})
export class DriverMorePageModule {}