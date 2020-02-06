import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSchedulePage } from './schedule';

@NgModule({
  declarations: [
    DriverSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSchedulePage),
  ],
})
export class DriverSchedulePageModule {}
