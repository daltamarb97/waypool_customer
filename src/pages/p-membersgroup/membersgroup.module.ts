
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersGroupPage } from './membersgroup';

 
@NgModule({
  declarations: [
    MembersGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersGroupPage),
  ],
  exports: [
    MembersGroupPage
  ]
})
export class MembersGroupPageModule {}