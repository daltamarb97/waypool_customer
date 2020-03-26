import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';

@IonicPage()

@Component({
  selector: 'page-createcrew',
  templateUrl: 'createcrew.html'
})
export class CreateCrewPage {

  startHour:any;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController) {
       


  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

  setCrew(){

    if(this.startHour === undefined){
      let alert = this.alertCtrl.create({
        title: 'No haz puesto una hora de inicio de viaje para este grupo',
        buttons: ['OK']
      });
      alert.present();
    }else{

      //AQUI QUEDE
      this.afDB.database.ref('')
    }
    
  }

 
}
