import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {  chatsService } from '../../services/chat.service';

@IonicPage()
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html'
})
export class ChattingPage {
  @ViewChild(Content) content: Content;
user:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;
message:string;
chats:any = [];
driver:any;
  constructor(public navCtrl: NavController,public chatsService:chatsService,public navParams: NavParams,private AngularFireAuth: AngularFireAuth) {
    this.driver= this.navParams.get('driver'); 

    this.chatsService.getChats(this.driver.userId,this.userUid)
    .subscribe( chat => {
    
      this.chats = chat;
      console.log(this.chats);
      this.scrollToBottom();

  });
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
  sendMessage(){

    this.chatsService.pushMessageUser(this.driver.userId,this.userUid,this.message);
    this.message = '';
    this.scrollToBottom();
  }
}