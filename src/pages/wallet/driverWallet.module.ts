
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverWalletPage } from './driverWallet';
 
@NgModule({
  declarations: [
    DriverWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverWalletPage),
  ],
  exports: [
    DriverWalletPage
  ]
})
export class DriverWalletPageModule {}