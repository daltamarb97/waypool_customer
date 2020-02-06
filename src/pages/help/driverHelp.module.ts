
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverHelpPage } from './driverHelp';
 
@NgModule({
  declarations: [
    DriverHelpPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverHelpPage),
  ],
  exports: [
    DriverHelpPage
  ]
})
export class DriverHelpPageModule {}