
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanceltripPage } from './canceltrip';
 
@NgModule({
  declarations: [
    CanceltripPage,
  ],
  imports: [
    IonicPageModule.forChild(CanceltripPage),
  ],
  exports: [
    CanceltripPage
  ]
})
export class CanceltripPageModule {}