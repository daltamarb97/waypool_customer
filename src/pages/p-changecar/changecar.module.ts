import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeCarPage } from './changecar';

@NgModule({
  declarations: [
    ChangeCarPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeCarPage),
  ],
  exports: [
    ChangeCarPage
  ]
})
export class ChangeCarPageModule {}
