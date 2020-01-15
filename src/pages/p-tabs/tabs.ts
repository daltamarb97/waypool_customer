import { Component } from '@angular/core';


import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FindridePassPage';
  
  tab3Root = 'WalletPage';
  tab4Root = 'MorePage';

  constructor() {
    // this.goConfirmUniversity();
  }

}
