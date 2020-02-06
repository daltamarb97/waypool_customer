
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverFindridePage } from './driverFindride';
 
@NgModule({
  declarations: [
    DriverFindridePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverFindridePage),
  ],
  exports: [
    DriverFindridePage
  ]
})
export class DriverFindridePageModule {}