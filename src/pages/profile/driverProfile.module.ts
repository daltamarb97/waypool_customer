
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverProfilePage } from './driverProfile';
 
@NgModule({
  declarations: [
    DriverProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverProfilePage),
  ],
  exports: [
    DriverProfilePage
  ]
})
export class DriverProfilePageModule {}