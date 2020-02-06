import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrverVerificationNumberPage } from './driver-verification-number';

@NgModule({
  declarations: [
    DrverVerificationNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(DrverVerificationNumberPage),
  ],
  exports: [
    DrverVerificationNumberPage
  ]
})
export class DrverVerificationNumberPageModule {}
