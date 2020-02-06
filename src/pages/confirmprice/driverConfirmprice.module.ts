
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverConfirmpricePage } from './driverConfirmprice';
 
@NgModule({
  declarations: [
    DriverConfirmpricePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverConfirmpricePage),
  ],
  exports: [
    DriverConfirmpricePage
  ]
})
export class DriverConfirmpricePageModule {}