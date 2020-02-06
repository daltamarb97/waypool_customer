
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverCarRegistrationPage } from './car-registration';
 
@NgModule({
  declarations: [
    DriverCarRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverCarRegistrationPage),
  ],
  exports: [
    DriverCarRegistrationPage
  ]
})
export class DriverCarRegistrationPageModule {}