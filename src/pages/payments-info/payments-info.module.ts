import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPaymentsInfoPage } from './payments-info';

@NgModule({
  declarations: [
    DriverPaymentsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPaymentsInfoPage),
  ],
})
export class DriverPaymentsInfoPageModule {}
