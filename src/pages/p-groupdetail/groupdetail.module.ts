
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupDetailPage } from './groupdetail';
 
@NgModule({
  declarations: [
    GroupDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupDetailPage),
  ],
  exports: [
    GroupDetailPage
  ]
})
export class GroupDetailPageModule {}