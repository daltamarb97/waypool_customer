
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGroupPage } from './creategroup';
 
@NgModule({
  declarations: [
    CreateGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateGroupPage),
  ],
  exports: [
    CreateGroupPage
  ]
})
export class CreateGroupPageModule {}