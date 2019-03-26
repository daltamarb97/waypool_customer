
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmpopupPage } from './confirmpopup';
 
@NgModule({
  declarations: [
    ConfirmpopupPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmpopupPage),
  ],
  exports: [
    ConfirmpopupPage
  ]
})
export class ConfirmpopupPageModule {}