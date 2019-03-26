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
  geoinfo1;
  geoinfo2;
  buttonColor:string = '#3fb1df';
  buttonColor2:string = '#3fb1df'; 
  buttonColor3:string = '#3fb1df';
  buttonColor4:string = '#3fb1df';
  clicked1 = false;
  clicked2 = false;
  clicked3 = false;
  clicked4 = false;


  constructor(public navCtrl: NavController, public noteService:noteService, public appCtrl: App,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geofireService: geofireService) {
      this.geoinfo1 = this.navParams.get('geoFire1');
      console.log(this.geoinfo1);
      
      this.geoinfo2 = this.navParams.get('geoFire2');
      console.log(this.geoinfo2)
  }
  
    setNoteDriver(){
      if(this.note == null || this.note == ''){
        this.note = 'No hay nota'
        this.noteService.setNote(this.userUid,this.note)

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
    this.buttonColor = '#0fc874';
    this.buttonColor2 = '#3fb1df';
    this.buttonColor3 = '#3fb1df';
    this.buttonColor4 = '#3fb1df';
    this.clicked1 = true;
    if(this.clicked2 == true || this.clicked3 == true || this.clicked4 == true){
      this.geofireService.deleteUserGeofireOr(this.userUid);
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;

    }
      }

  setGeoFireOrigin(){
    this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
    this.buttonColor2 = '#0fc874';
    this.buttonColor = '#3fb1df';
    this.buttonColor3 = '#3fb1df';
    this.buttonColor4 = '#3fb1df';

    this.clicked2=true;
    if(this.clicked1 == true){
      this.geofireService.deleteUserGeofireDest(this.userUid);
      this.clicked1 = false;
    }
      }

      setGeoFireOrigin2(){
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
    this.buttonColor2 = '#3fb1df';
    this.buttonColor = '#3fb1df';
    this.buttonColor3 = '#0fc874';
    this.buttonColor4 = '#3fb1df';

    this.clicked3=true;
    if(this.clicked1 == true){
      this.geofireService.deleteUserGeofireDest(this.userUid);
      this.clicked1 = false;

    }
      }

      setGeoFireOrigin3(){
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
    this.buttonColor2 = '#3fb1df';
    this.buttonColor = '#3fb1df';
    this.buttonColor3 = '#3fb1df';
    this.buttonColor4 = '#0fc874';

    this.clicked4=true;
    if(this.clicked1 == true){
      this.geofireService.deleteUserGeofireDest(this.userUid);
      this.clicked1 = false;

    }
      }
  
  dismissOnClick(){
    this.viewCtrl.dismiss(this.accepted);
    if(this.clicked1 == true || this.clicked2 == true){
      this.geofireService.deleteUserGeofireDest(this.userUid);
      this.geofireService.deleteUserGeofireOr(this.userUid);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
