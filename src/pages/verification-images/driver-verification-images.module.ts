
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverVerificationImagesPage } from './driver-verification-images';
 
@NgModule({
  declarations: [
    DriverVerificationImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverVerificationImagesPage),
  ],
  exports: [
    DriverVerificationImagesPage
  ]
})
export class DriverVerificationImagesPageModule {}