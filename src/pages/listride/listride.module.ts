
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListridePage } from './listride';
 
@NgModule({
  declarations: [
    ListridePage,
  ],
  imports: [
    IonicPageModule.forChild(ListridePage),
  ],
  exports: [
    ListridePage
  ]
})
export class ListridePageModule {}