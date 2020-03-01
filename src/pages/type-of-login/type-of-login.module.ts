import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypeOfLoginPage } from './type-of-login';

@NgModule({
  declarations: [
    TypeOfLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(TypeOfLoginPage),
  ],
})
export class TypeOfLoginPageModule {}
