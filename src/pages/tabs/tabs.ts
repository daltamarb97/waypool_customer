import { Component } from '@angular/core';


import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FindridePage';
  tab2Root = 'MyridePage';
  
  tab3Root = 'WalletPage';
  tab4Root = 'MorePage';

  constructor() {

  }
}
