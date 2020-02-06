
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSignupPage } from './driverSignup';
 
@NgModule({
  declarations: [
    DriverSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSignupPage),
  ],
  exports: [
    DriverSignupPage
  ]
})
export class DriverSignupPageModule {}