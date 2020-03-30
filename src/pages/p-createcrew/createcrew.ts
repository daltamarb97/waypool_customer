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
import { DriverGeofireService } from '../../services/d-geofire.services';

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
  pointsAlongRoute = [];
  indexesOfPointsAlongRoute = [];
  count:any = 0;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController, private geofireServicesDr: DriverGeofireService) {
      this.userId = this.AngularFireAuth.auth.currentUser.uid;

      // Getting info for creating crew in DB
      this.afDB.database.ref('/usersTest/' + this.userId).once('value').then((snap)=>{
        if(snap.val()){
          this.admin = {
            city: snap.val().city,
            company: snap.val().company,
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
    this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
    this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
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
        startHour: this.startHour,
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
        const Key_Crew = snap.key;
        this.afDB.database.ref('/crewsTest/' + this.userId + '/' + Key_Crew).update({
          crewId: Key_Crew
        }).then(()=>{

                  this.geofireServicesDr.setGeofireOrCrew( Key_Crew, this.latOr, this.lngOr );
                  this.afDB.database.ref('/geofireOrCrew/' + Key_Crew,).update({
                    adminId: this.userId
                  });

                  console.log('executed geofire Or for crews');

                this.geofireServicesDr.setGeofireDestCrew( Key_Crew, this.latDest, this.lngDest);
                this.afDB.database.ref('/geofireDestCrew/' + Key_Crew).update({
                  adminId: this.userId
                });
                
                console.log('executed geofire dest');
              
              
              this.indexesOfPointsAlongRoute.forEach(index=>{
                  this.count++
                  let newKey = Key_Crew.concat(this.count)

                  
                  
                  this.geofireServicesDr.setGeofireRouteCrew(newKey, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng );
                  this.afDB.database.ref('/geofireRouteCrew/' + newKey).update({
                    adminId: this.userId,
                    crewId: Key_Crew
                });
                
                
              })  

        })

        
      }).then(()=>{
        let alert = this.alertCtrl.create({
          title: 'Eres ahora administrador del crew que acabaste de crear',
          subTitle: 'Ve a "Mis Viajes" y revisa el estado de tu crew',
          buttons: ['OK']
        }); 
        alert.present();
        this.viewCtrl.dismiss();
      })
    }
    
  }

 
}
