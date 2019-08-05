import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';

import { sendUsersService } from '../../services/sendUsers.service';

import { noteService } from '../../services/note.service';
import { geofireService } from '../../services/geoFire.service';

@IonicPage()
@Component({
  selector: 'page-confirmnote',
  templateUrl: 'confirmnote.html'
})
export class ConfirmNotePage {
  
  accepted: boolean;

  
  note:string;
  userUid=this.AngularFireAuth.auth.currentUser.uid;


  constructor(public navCtrl: NavController, public noteService:noteService, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geofireService: geofireService) {

     
  }

  
    setNoteDriver(){
      if(this.note == null || this.note == ''){
        this.note = 'No hay nota'
        this.noteService.setNote(this.SignUpService.userUniversity, this.userUid,this.note)

        this.accepted = true;
        this.dismiss(); 
        
      } else {
        this.noteService.setNote(this.SignUpService.userUniversity, this.userUid,this.note)
        this.accepted = true;
        this.dismiss();        
      }
        
      }; 
  
  dismissOnClick(){
    this.viewCtrl.dismiss(this.accepted);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
