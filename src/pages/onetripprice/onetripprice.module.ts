
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { oneTripPricePage } from './onetripprice';
 
@NgModule({
  declarations: [
    oneTripPricePage,
  ],
  imports: [
    IonicPageModule.forChild(oneTripPricePage),
  ],
  exports: [
    oneTripPricePage
  ]
})
export class oneTripPricePageModule {}