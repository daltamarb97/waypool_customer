
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificationImagesPage } from './verification-images';
 
@NgModule({
  declarations: [
    VerificationImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(VerificationImagesPage),
  ],
  exports: [
    VerificationImagesPage
  ]
})
export class VerificationImagesPageModule {}