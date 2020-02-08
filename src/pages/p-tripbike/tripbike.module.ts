
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripbikePage } from './tripbike';
 
@NgModule({
  declarations: [
    TripbikePage,
  ],
  imports: [
    IonicPageModule.forChild(TripbikePage),
  ],
  exports: [
    TripbikePage
  ]
})
export class TripbikePageModule {}