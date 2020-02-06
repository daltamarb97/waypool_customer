
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverShowInfoCarPage } from './showinfocar';
 
@NgModule({
  declarations: [
    DriverShowInfoCarPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverShowInfoCarPage),
  ],
  exports: [
    DriverShowInfoCarPage
  ]
})
export class DriverShowInfoCarPageModule {}