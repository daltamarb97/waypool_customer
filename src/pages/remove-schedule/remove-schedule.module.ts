import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverRemoveSchedulePage } from './remove-schedule';

@NgModule({
  declarations: [
    DriverRemoveSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverRemoveSchedulePage),
  ],
})
export class DriverRemoveSchedulePageModule {}
