import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificationNumberPage } from './verification-number';

@NgModule({
  declarations: [
    VerificationNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(VerificationNumberPage),
  ],
  exports: [
    VerificationNumberPage
  ]
})
export class VerificationNumberPageModule {}
