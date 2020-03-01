
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverUserVerificationPage } from './car-registration';
 
@NgModule({
  declarations: [
    DriverUserVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverUserVerificationPage),
  ],
  exports: [
    DriverUserVerificationPage
  ]
})
export class DriverUserVerificationPageModule {}