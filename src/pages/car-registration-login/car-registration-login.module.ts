
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverCarRegistrationLoginPage } from './car-registration-login';
 
@NgModule({
  declarations: [
    DriverCarRegistrationLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverCarRegistrationLoginPage),
  ],
  exports: [
    DriverCarRegistrationLoginPage
  ]
})
export class DriverCarRegistrationPageModule {}