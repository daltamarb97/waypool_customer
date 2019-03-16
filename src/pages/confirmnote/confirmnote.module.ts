
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmNotePage } from './confirmnote';
 
@NgModule({
  declarations: [
    ConfirmNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmNotePage),
  ],
  exports: [
    ConfirmNotePage
  ]
})
export class ConfirmNotePageModule {}