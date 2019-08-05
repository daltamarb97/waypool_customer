
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmUniversityPage } from './confirm-university';
 
@NgModule({
  declarations: [
    ConfirmUniversityPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmUniversityPage),
  ],
  exports: [
    ConfirmUniversityPage
  ]
})
export class ConfirmUniversityPageModule {}
