
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferalPage } from './earn';

 
@NgModule({
  declarations: [
    ReferalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferalPage),
  ],
  exports: [
    ReferalPage
  ]
})
export class ReferalPageModule {}