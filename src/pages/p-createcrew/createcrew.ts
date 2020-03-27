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
  userId:any;
  origin:any;
  destination:any;
  latOr:any;
  lngOr:any;
  latDest:any;
  lngDest:any;
  admin = {};
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController) {
      this.userId = this.AngularFireAuth.auth.currentUser.uid;

      // Getting info for creating crew in DB
      this.afDB.database.ref('/usersTest/' + this.userId).once('value').then((snap)=>{
        if(snap.val()){
          this.admin = {
            city: snap.val().city,
            comapny: snap.val().company,
            name: snap.val().name,
            lastname: snap.val().lastname,
            phone: snap.val().phone,
            userId: snap.val().userId,
            verifiedPerson: snap.val().verifiedPerson,
          }
          this.origin = snap.val().trips.origin[0]
          this.destination = snap.val().trips.destination[0]

        }
        
      })



    this.latOr = this.navParams.get('latOr');
    this.lngOr = this.navParams.get('lngOr');
    this.latDest = this.navParams.get('latDest');
    this.lngDest = this.navParams.get('lngDest');
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

  setCrew(){

    if(this.startHour === undefined){
      let alert = this.alertCtrl.create({
        title: 'Por favor confirma la hora a la que iniciaría este viaje',
        buttons: ['OK']
      }); 
      alert.present();
    }else{

      //AQUI QUEDE
      this.afDB.database.ref('/crewsTest/' + this.userId).push({
        admin: this.admin,
        destination: {
          name: this.destination,
          coords: {
            lat: this.latDest,
            lng: this.lngDest
          }
        },
        origin: {
          name: this.origin,
          coords: {
            lat: this.latOr,
            lng: this.lngOr
          }
        },
      }).then((snap)=>{

        this.afDB.database.ref('/crewsTest/' + this.userId + '/' + snap.key).update({
          crewId: snap.key
        })
        
      }).then(()=>{

        let alert = this.alertCtrl.create({
          title: 'Eres ahora administrador de el grupo que acabaste de crear',
          buttons: ['OK']
        }); 
        alert.present();
        this.viewCtrl.dismiss();
      })
    }
    
  }

 
}
