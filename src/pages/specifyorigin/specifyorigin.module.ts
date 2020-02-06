
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSpecifyOriginPage } from './specifyorigin';
 
@NgModule({
  declarations: [
    DriverSpecifyOriginPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSpecifyOriginPage),
  ],
  exports: [
    DriverSpecifyOriginPage
  ]
})
export class DriverSpecifyOriginPageModule {}