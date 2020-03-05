
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSpecifyRoutePage } from './specifyroute';
 
@NgModule({
  declarations: [
    DriverSpecifyRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSpecifyRoutePage),
  ],
  exports: [
    DriverSpecifyRoutePage
  ]
})
export class DriverSpecifyRoutePageModule {}