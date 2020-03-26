
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCrewPage } from './createcrew';
 
@NgModule({
  declarations: [
    CreateCrewPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCrewPage),
  ],
  exports: [
    CreateCrewPage
  ]
})
export class CreateCrewPageModule {}