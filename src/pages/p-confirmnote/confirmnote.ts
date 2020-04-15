import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendcoords.service';

import { sendUsersService } from '../../services/sendUsers.service';

import { noteService } from '../../services/note.service';
import { geofireService } from '../../services/geoFire.service';
import * as moment from 'moment';
import { MetricsService } from '../../services/metrics.service';

@IonicPage()
@Component({
  selector: 'page-confirmnote',
  templateUrl: 'confirmnote.html'
})
export class ConfirmNotePage {
  
  accepted: boolean;

  
  note:string;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  or;
  dest;
  info:any;
  constructor(public navCtrl: NavController, private MetricsService:MetricsService,public noteService:noteService, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geofireService: geofireService) {
    this.or= this.navParams.get('or') 
    this.dest= this.navParams.get('dest') 
    console.log(this.dest);
     
  }

  
    setNoteDriver(){
      moment.locale('es'); //to make the date be in spanish  
      let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
      console.log(today)
      console.log(this.dest);
      this.MetricsService.createdReserves(this.userUid,today,this.dest,this.or);
      if(this.note == null || this.note == ''){
        this.note = 'No hay nota'
        this.noteService.setNote(this.userUid, this.note)

        this.accepted = true;
        this.dismiss(); 
        
      } else {
        this.noteService.setNote(this.userUid, this.note)
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

