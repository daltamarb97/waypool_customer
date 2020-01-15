
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyridePage } from './myride';
 
@NgModule({
  declarations: [
    MyridePage,
  ],
  imports: [
    IonicPageModule.forChild(MyridePage),
  ],
  exports: [
    MyridePage
  ]
})
export class MyridePageModule {}