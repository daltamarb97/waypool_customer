
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverLoginPage } from './driverLogin';
 
@NgModule({
  declarations: [
    DriverLoginPage
  ],
  imports: [
    IonicPageModule.forChild(DriverLoginPage),
  ],
  exports: [
    DriverLoginPage
  ]
})
export class DriverLoginPageModule {}