
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverChattingPage } from './driverChatting';
 
@NgModule({
  declarations: [
    DriverChattingPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverChattingPage),
  ],
  exports: [
    DriverChattingPage
  ]
})
export class DriverChattingPageModule {}