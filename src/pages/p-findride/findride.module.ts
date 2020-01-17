
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindridePassPage } from './findride';
 
@NgModule({
  declarations: [
    FindridePassPage,
  ],
  imports: [
    IonicPageModule.forChild(FindridePassPage),
  ],
  exports: [
    FindridePassPage 
  ]
})
export class FindridePassPageModule {}