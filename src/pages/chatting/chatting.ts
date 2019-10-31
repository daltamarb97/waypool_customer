import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Content, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {  chatsService } from '../../services/chat.service';
import { SignUpService } from '../../services/signup.services';
import { sendFeedbackService } from '../../services/sendFeedback.service';
import { Subject } from 'rxjs';

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
driverUid:any;
reserve:any;
driver:any;
unsubscribe = new Subject;
isTrip:any;

  constructor(public navCtrl: NavController,public sendFeedbackService:sendFeedbackService,public toastCtrl:ToastController,public SignUpService: SignUpService,public alertCtrl:AlertController,public actionSheetCtrl:ActionSheetController,public chatsService:chatsService,public navParams: NavParams,private AngularFireAuth: AngularFireAuth) {
    this.reserve= this.navParams.get('reserve'); 
    this.isTrip= this.navParams.get('isTrip'); 

    console.log(this.reserve.driver.userId);
    
    this.SignUpService.getMyInfoForProfile(this.SignUpService.userPlace,this.userUid).takeUntil(this.unsubscribe).subscribe(info =>{
      this.user = info
      console.log(this.user)
    })
    if(this.isTrip === true ){
      this.getChatFromTrip()

    }else{
      this.getChatFromReserve()
    }
  }
  getChatFromTrip(){
    this.chatsService.getChatsFromTrip(this.SignUpService.userPlace,this.reserve.keyTrip,this.reserve.driver.userId)
    .takeUntil(this.unsubscribe).subscribe( chat => {
    
      this.chats = chat;
      console.log(this.chats);
      this.scrollToBottom();

  });
  }
  getChatFromReserve(){
    this.chatsService.getChatsFromReserve(this.SignUpService.userPlace,this.reserve.keyTrip,this.reserve.driver.userId)
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
  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
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
            this.sendFeedbackService.sendFeedback(this.SignUpService.userPlace,'Reporte_de_chat',this.chats,this.user.name,this.user.lastname,this.user.phone,this.userUid)               
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
       
       this.chatsService.pushMessageUserInTrip(this.SignUpService.userPlace,this.reserve.keyTrip,this.reserve.driver.userId,this.userUid,this.message,this.user.name);
       this.message = '';    
       this.scrollToBottom();
     }
     sendMessageForReserve(){
       this.chatsService.pushMessageUserInReserve(this.SignUpService.userPlace,this.reserve.keyTrip,this.reserve.driver.userId,this.userUid,this.message,this.user.name);
       this.message = '';    
       this.scrollToBottom();
     }
}
