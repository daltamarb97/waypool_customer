import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPublicProfilePage } from './driver-public-profile';

@NgModule({
  declarations: [
    DriverPublicProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPublicProfilePage),
  ],
  exports: [
    DriverPublicProfilePage
  ]
})
export class DriverPublicProfilePageModule {}
