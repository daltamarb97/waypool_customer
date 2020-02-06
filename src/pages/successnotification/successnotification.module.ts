import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSuccessNotificationPage } from './successnotification';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    DriverSuccessNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSuccessNotificationPage),
    LottieAnimationViewModule.forRoot()
  ],
})
export class DriverSuccessNotificationPageModule {}
