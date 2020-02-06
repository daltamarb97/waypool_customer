import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
@IonicPage()
@Component({
  selector: 'driver-page-chats',
  templateUrl: 'driverChats.html'
})
export class DriverChatsPage {
  driverUid=this.AngularFireAuth.auth.currentUser.uid;
  pickingUsers:any = [];
  constructor(public navCtrl: NavController,public sendUsersService: DriverSendUsersService,private AngularFireAuth: AngularFireAuth, public signUpService: DriverSignUpService) {
    this.sendUsersService.getUsersOnTrip(this.signUpService.userPlace, this.driverUid)
    .subscribe( user => {
      
        this.pickingUsers = user;
        console.log(this.pickingUsers);
          
    });
  }
  
     chatting(user){
    this.navCtrl.push('ChattingPage',{user:user});

    }

}
