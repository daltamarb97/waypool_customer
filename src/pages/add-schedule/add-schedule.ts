import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverInstancesService } from '../../services/d-instances.services';

 

@IonicPage()
@Component({
  selector: 'driver-page-add-schedule',
  templateUrl: 'driver-add-schedule.html',
})
export class DriverAddSchedulePage {
  @ViewChild('house',{read:ElementRef}) house;
  @ViewChild('work',{read:ElementRef}) work;
  accepted:any;
  imageHouseToWork:boolean = false;
  imageWorkToHouse:boolean = false;
  button1WasntTapped:boolean = true;
  button2WasntTapped:boolean = true;
  textMessage: string;
  startHour:any;
  userId: any;
  geofireType:string;
  imageURL:any;
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public renderer: Renderer ,public alertCtrl: AlertController, public signUpService: DriverSignUpService, public angularFireAuth: AngularFireAuth, private instances: DriverInstancesService, private afDB: AngularFireDatabase) {
  
    this.userId = this.angularFireAuth.auth.currentUser.uid;

    this.afDB.database.ref( '/driversTest/' + this.userId).once('value').then((snap)=>{
      this.userInfo = snap.val();
    })
  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }

  
  selectImageHouse(){
    // this is just to change the css
    this.renderer.setElementStyle(this.house.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.house.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.house.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.work.nativeElement,'border-width','0px')
    this.imageURL = 'assets/imgs/workToHouse.png';

    this.textMessage = 'Casa'
    this.geofireType = 'destination';
    this.imageHouseToWork = true;
    this.imageWorkToHouse = false;
  }
  selectImageWork(){
    // this is just to change the css
    this.renderer.setElementStyle(this.work.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.work.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.work.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.house.nativeElement,'border-width','0px')
    this.textMessage = 'Trabajo';
    this.geofireType = 'origin';
    this.imageURL = 'assets/imgs/houseToWork.png';
    
    this.imageHouseToWork = false;
    this.imageWorkToHouse = true;
  
  }
 

  confirm(){
    console.log(this.imageHouseToWork);
    console.log(this.imageWorkToHouse);

      
        if(this.imageHouseToWork === true  || this.imageWorkToHouse === true){ 
          if(this.startHour === undefined || this.startHour === null){
            const alert = this.alertCtrl.create({
              title: 'Debes seleccionar una hora de partida',
              subTitle: '¿A qué hora sales del trabajo o de tu casa?',
              buttons: ['OK']
            });
            alert.present();
          }else{
            const alert = this.alertCtrl.create({
              title: '¿vas a tu ' + this.textMessage + ' a las ' + this.startHour + '?',
              buttons: [
                {
                  text: 'Confirmo este horario',
                  handler: () => {
                    this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
                      let obj = snap.val();

                      this.afDB.database.ref('allSchedules/' +this.userId).push({
                        hour: this.startHour, 
                        type: this.geofireType,
                        description: this.textMessage,
                        image: this.imageURL
                    }).then((snap1)=>{
                        this.afDB.database.ref('allSchedules/' +this.userId + '/' + snap1.key).update({
                            key: snap1.key                              
                        })
                         
                      Object.getOwnPropertyNames(obj).forEach((keyZ)=>{

                          if(obj[keyZ] === 2 || obj[keyZ] === 3 || obj[keyZ] === 4 || obj[keyZ] === 5 || obj[keyZ] === 6 || obj[keyZ] === 1 || obj[keyZ] === 7 || obj[keyZ] === 8 || obj[keyZ] === 9 || obj[keyZ] === 10){

                          }else{
                            this.afDB.database.ref(obj[keyZ] + '/drivers/'+this.userId+'/schedule/' + snap1.key).update({
                              hour: this.startHour, 
                              type: this.geofireType,
                              description: this.textMessage,
                              image: this.imageURL,
                              key: snap1.key
                          })
                          }              
                        })
                      })
                    }).then(()=>{
                      this.viewCtrl.dismiss();
                    })
                  }
                }
              ]
            });
            alert.present();
          }
          
        }else{
          const alert = this.alertCtrl.create({
            title: 'Debes seleccionar una opción',
            subTitle: '¿a esta hora vas a tu casa o a tu trabajo?',
            buttons: ['OK']
          });
          alert.present();
        }
      
    
  }

}
