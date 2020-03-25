import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Content, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {  DriverChatsService } from '../../services/d-chat.service';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverSendFeedbackService } from '../../services/d-sendFeedback.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs-compat/operator/takeUntil';

@IonicPage()
@Component({
  selector: 'driver-page-chatting',
  templateUrl: 'driverChatting.html'
})
export class DriverChattingPage {
  @ViewChild(Content) content: Content;
userUid=this.AngularFireAuth.auth.currentUser.uid;
message:string;
chats:any = [];
driverUid:any;
reserve:any;
driver:any;
isTrip:any;
unsubscribe = new Subject;

  constructor(public navCtrl: NavController,public sendFeedbackService:DriverSendFeedbackService,public toastCtrl:ToastController,public SignUpService: DriverSignUpService,public alertCtrl:AlertController,public actionSheetCtrl:ActionSheetController,public chatsService:DriverChatsService,public navParams: NavParams,private AngularFireAuth: AngularFireAuth) {
    this.reserve= this.navParams.get('reserve'); 
    this.isTrip= this.navParams.get('isTrip'); 

    console.log(this.reserve.driver.userId);
    
    this.SignUpService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe).subscribe(info =>{
      this.driver = info
      console.log(this.driver)
    })
    if(this.isTrip === true ){
      this.getChatFromTrip()

    }else{
      this.getChatFromReserve()
    }
    
  
  }
  getChatFromTrip(){
    this.chatsService.getChatsFromTrip(this.reserve.keyTrip,this.reserve.driver.userId)
    .takeUntil(this.unsubscribe).subscribe( chat => {
    
      this.chats = chat;
      console.log(this.chats);
      this.scrollToBottom();

  });
  }
  getChatFromReserve(){
    this.chatsService.getChatsFromReserve(this.reserve.keyTrip,this.reserve.driver.userId)
    .takeUntil(this.unsubscribe).subscribe( chat => {
    
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

  more() {
		const actionSheet = this.actionSheetCtrl.create({
		  title: 'Opciones',
		  buttons: [
			{
			  text: 'Reportar Chat',
			  role: 'destructive',
			  handler: () => {
          this.reportChat();
        }
      },
			{
			  text: 'Cancel',
			  role: 'cancel',
			  handler: () => {
				console.log('Cancel clicked');
			  }
			}
		  ]
		});
		actionSheet.present();
    }
    ionViewDidLeave(){
      this.unsubscribe.next();
       this.unsubscribe.complete();
    }
    reportChat(){
      let alert = this.alertCtrl.create({
        title: 'Reportar',
        message: 'Reportar este chat es completamente anónimo a tus compañeros y lo revisaremos de inmediato.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Reportar',
            handler: () => {
            this.sendFeedbackService.sendFeedback('Reporte_de_chat',this.chats,this.driver.name,this.driver.lastname,this.driver.phone,this.userUid)               
            const toast = this.toastCtrl.create({
              message: 'Haz reportado este chat',
              showCloseButton: true,
              closeButtonText: 'OK',
              position: 'top'
          });
          toast.present();
        }
      }
        ]
      });
      alert.present();
      }
    
  sendMessage(){
    if(this.message === undefined || this.message === null){
      const toast = this.toastCtrl.create({
        message: 'No puedes enviar un mensaje vacío',
        showCloseButton: true,
        closeButtonText: 'OK',
        position: 'top'
    });
    toast.present();
    }else{     
      if(this.isTrip === true ){
        this.sendMessageForTrip();
  
      }else{
        this.sendMessageForReserve();
      }  
  
    }
  
  }
  sendMessageForTrip(){
     console.log(this.isTrip);
    
    this.chatsService.pushMessageUserInTrip(this.reserve.keyTrip,this.reserve.driver.userId,this.userUid,this.message,this.driver.name);
    this.message = '';    
    this.scrollToBottom();
  }
  sendMessageForReserve(){
    this.chatsService.pushMessageUserInReserve(this.reserve.keyTrip,this.reserve.driver.userId,this.userUid,this.message,this.driver.name);
    this.message = '';    
    this.scrollToBottom();
  }
}
