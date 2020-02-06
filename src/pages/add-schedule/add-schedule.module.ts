import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverAddSchedulePage } from './add-schedule';

@NgModule({
  declarations: [
    DriverAddSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverAddSchedulePage),
  ],
  exports: [
    DriverAddSchedulePage
  ]
})
export class DriverAddSchedulePageModule {}
