
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverTermsPage } from './driverTerms';
 
@NgModule({
  declarations: [
    DriverTermsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverTermsPage),
  ],
  exports: [
    DriverTermsPage
  ]
})
export class DriverTermsPageModule {}