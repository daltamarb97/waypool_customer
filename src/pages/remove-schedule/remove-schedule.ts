import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';



@IonicPage()
@Component({
  selector: 'driver-page-remove-schedule',
  templateUrl: 'driver-remove-schedule.html',
})
export class DriverRemoveSchedulePage {


  accepted:any;
  textMessage: string;
  startHour:any;
  userId: any;
  geofireType:string;
  picToView:any;
  schedule:any;
  userInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public signUpService: DriverSignUpService, public angularFireAuth: AngularFireAuth, public afDB: AngularFireDatabase) {

    this.schedule= this.navParams.get('schedule') 
console.log(this.schedule);

    this.userId = this.angularFireAuth.auth.currentUser.uid;

    this.startHour = this.schedule.hour;
    this.picToView = this.schedule.image;
    this.textMessage = this.schedule.description;


    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then((snap)=>{
      this.userInfo = snap.val();
    })

  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }

  remove(){


    this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
      let obj = snap.val();
      Object.getOwnPropertyNames(obj).forEach((key)=>{

        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

        }else{
          this.signUpService.removeSchedule(obj[key], this.userId, this.schedule.key);
        } 

      })
    }).then(()=>{
      this.afDB.database.ref('allSchedules/'+this.userId+'/'+ this.schedule.key).remove(); 
      this.dismiss();
    })
  }

}
