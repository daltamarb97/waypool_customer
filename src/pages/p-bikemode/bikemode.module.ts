
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BikeModePage } from './bikemode';
 
@NgModule({
  declarations: [
    BikeModePage,
  ],
  imports: [
    IonicPageModule.forChild(BikeModePage),
  ],
  exports: [
    BikeModePage 
  ]
})
export class FindridePassPageModule {}