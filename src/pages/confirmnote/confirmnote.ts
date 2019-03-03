import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { MyridePage } from '../myride/myride';
import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';

import { ListridePage } from '../listride/listride';
import { noteService } from '../../services/note.service';
import { geofireService } from '../../services/geoFire.service';


@Component({
  selector: 'page-confirmnote',
  templateUrl: 'confirmnote.html'
})
export class ConfirmNotePage {
  
  accepted: boolean;

  
  note:string;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  geoinfo1;
  geoinfo2;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';
  clicked1 = false;
  clicked2 = false;

  constructor(public navCtrl: NavController, public noteService:noteService, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geofireService: geofireService) {
      this.geoinfo1 = this.navParams.get('geoFire1');
      console.log(this.geoinfo1);
      
      this.geoinfo2 = this.navParams.get('geoFire2');
      console.log(this.geoinfo2)
  }
  
    setNoteDriver(){
      if(this.note == null || this.note == ''){
        this.accepted = true;
        this.dismiss(); 
        
      } else {
        this.noteService.setNote(this.userUid,this.note)
        this.accepted = true;
        this.dismiss();        
      }
        
      }; 
      
  setGeoFireDestination(){
    this.geofireService.setLocationGeofireDest( this.userUid, this.geoinfo2.lat, this.geoinfo2.lng, this.userUid);
    this.buttonColor = '#1AA3E8';
    this.buttonColor2 = '#0fc874';
    this.clicked1 = true;
    if(this.clicked2 = true){
      this.geofireService.deleteUserGeofireOr(this.userUid);
    }
      }

  setGeoFireOrigin(){
    this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
    this.buttonColor2 = '#1AA3E8';
    this.buttonColor = '#0fc874';
    this.clicked2=true;
    if(this.clicked1 = true){
      this.geofireService.deleteUserGeofireDest(this.userUid);
    }
      }
        
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
