
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { DriverChatsPage } from './driverChats';
@IonicPage()
@NgModule({
  declarations: [
    DriverChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverChatsPage),
  ],
  exports: [
    DriverChatsPage
  ]
})
export class DriverChatsPageModule {}