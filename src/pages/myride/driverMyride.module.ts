
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverMyridePage } from './driverMyride';
 
@NgModule({
  declarations: [
    DriverMyridePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverMyridePage),
  ],
  exports: [
    DriverMyridePage
  ]
})
export class DriverMyridePageModule {}