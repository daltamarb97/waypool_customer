import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, AlertController, LoadingController } from 'ionic-angular';
import { DriverSignUpService } from '../../services/d-signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { DriverInstancesService } from '../../services/d-instances.services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'driver-page-schedule',
  templateUrl: 'driverschedule.html',
})
export class DriverSchedulePage {
  tripsInfo: any;



  schedule:string = "makeYourOwn";
  schedules = [];
  userId:any;
  picToView:any;
  description:any;
  showButtonWorkSchedule:boolean = false;
  userInfo:any;
  defaultZone:any;
  autocompleteMyPos;
  autocompleteMyDest; 
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems:any;
  autocompleteItems2:any;
  unsubscribe = new Subject;
  currentUser = this.angularFireAuth.auth.currentUser;
  showConectedButton:boolean;

  optionsCamera:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }; 

  optionsLibrary:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  origin: any;
  destination: any;
  SignUpService: any;
  toggleStatus: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public DriverSignUpService:DriverSignUpService,public instancesService: DriverInstancesService ,public modalCtrl: ModalController, public signUpService: DriverSignUpService, private angularFireAuth: AngularFireAuth, public app: App, public alertCtrl: AlertController, private camera: Camera, public loadingCtrl: LoadingController, private instances: DriverInstancesService, private afDB: AngularFireDatabase) {
    this.defaultZone = this.navParams.get('defaultZone');
    console.log(this.defaultZone);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2 = [];

    this.userId = this.angularFireAuth.auth.currentUser.uid;

    if(this.defaultZone){
      this.signUpService.userPlace = this.defaultZone;
    }else{
      
    }
    this.DriverSignUpService.getToggleStatus(this.signUpService.userPlace, this.userId)
    .subscribe(  toggleStatus => { 
      
      this.toggleStatus = toggleStatus; 
      console.log(toggleStatus );
      console.log(this.userId);
      
      if(this.toggleStatus === 'online'){
        this.showConectedButton = true;
        console.log("estoy online");
        
      }else{
        this.showConectedButton = false;
        console.log("estoy offline");

      }
    
    })
    this.signUpService.getMyOriginAndDestination(this.signUpService.userPlace, this.userId)
    .subscribe(  tripsInfo => { 
      console.log(tripsInfo);
      
      this.tripsInfo = tripsInfo; 
      this.autocompleteMyPos.input = this.tripsInfo.origin.name;
          this.autocompleteMyDest.input = this.tripsInfo.destination.name;
    
    })
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then((snap)=>{
          this.userInfo = snap.val();
         

        });


        this.signUpService.getSchedule(this.signUpService.userPlace, this.userId).subscribe(hour => {
          this.schedules = hour;
          console.log(this.schedules);
          if(this.schedules.length !== 0){
            this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId + '/scheduleType/').once('value').then((snap)=>{
              if(snap.val() === 'picture'){

              }else{
                this.showButtonWorkSchedule = true;
              }
            })        
          }else{
            this.showButtonWorkSchedule = false;
          }  
        })
  }


  makeSchedule(){
    console.log(     this.signUpService.userPlace);
    console.log(     this.userId);

    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId ).once('value').then((snap)=>{
        if(snap.val().toggleStatus === 'online'){
          const alert = this.alertCtrl.create({
            title: 'Para añadir un nuevo horario debes estar offline',
            buttons: ['OK']
          });
          alert.present();
        }else{
          let modal = this.modalCtrl.create('DriverAddSchedulePage');
          modal.onDidDismiss(accepted => {
            if(accepted){
            }
          })
          modal.present();
        }
    })
  }


  removeTime(sche){

    this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId ).once('value').then((snap)=>{
      if(snap.val().toggleStatus === 'online'){
        const alert = this.alertCtrl.create({
          title: 'Para eliminar este horario debes estar offline',
          buttons: ['OK']
        });
        alert.present();
      }else{
        let modal = this.modalCtrl.create('DriverRemoveSchedulePage', {
          schedule: sche
        });
        modal.onDidDismiss(accepted => {
          if(accepted){
            // this.navCtrl.push('ListridePage');
            const alert = this.alertCtrl.create({
              title: 'Este horario ha sido eliminado',
              buttons: ['OK']
            });
            alert.present();
          }
        })
        modal.present();
      }
    })
  }

  usageCameraSchedule(){
    this.camera.getPicture(this.optionsCamera).then((imageData) => {
      this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
        let obj = snap.val();
        Object.getOwnPropertyNames(obj).forEach((key)=>{

          if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

          }else{
            this.instances.scheduleTypePicture(obj[key], this.userId);
          }
        })
      })

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const pictureSchedule = storage().ref(this.userInfo.company + '/schedules/' + this.userId);


      
      pictureSchedule.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
          buttons: [{
            text: 'OK', 
            handler: () => {
              this.navCtrl.push('DriverFindridePage');
            }
          }]
        });
        alert.present();
      }).catch((error)=>{
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  accessLibrary(){

    this.camera.getPicture(this.optionsLibrary).then((imageData) => {

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const pictureSchedule = storage().ref(this.userInfo.company + '/schedules/' + this.userId);

      pictureSchedule.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();

        this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
          let obj = snap.val();
          Object.getOwnPropertyNames(obj).forEach((key)=>{
            
            if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

            }else{
              this.instances.scheduleTypePicture(obj[key], this.userId);
            }  
          })
        })

        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.push('DriverFindridePage');
            }
          }]
        });
        alert.present();
      }).catch((error)=>{
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el horario otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  conectDriver() {


    
      if (this.toggleStatus === 'online') {
          const alert = this.alertCtrl.create({
              title: '¡Ya estas conectado!',
              subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
              buttons: ['OK']
          });
          alert.present();
      } else {
    
          if (this.currentUser.emailVerified == false) {
              const alert = this.alertCtrl.create({
                  title: 'Oops!',
                  subTitle: 'por favor verifica tu email',
                  buttons: ['OK']
              });
              alert.present();
          } else {
    
              if (this.userInfo.documents) {
                  if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                      if (this.userInfo.schedule) {
                          try {
    
                            
                           
                              if (this.autocompleteMyPos.input == '' || this.autocompleteMyDest.input == '' ) {
                                  this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa y oficina sea correcta', 'Ok');
                                 
                                  // this.clearMarkers();
                                  // this.directionsDisplay.setDirections({routes: []});
                                  // this.loadMap();
                              } else {
                                  
                                  
                                      let modal = this.modalCtrl.create('DriverConfirmpricePage');
                                      modal.onDidDismiss(accepted => {
                                          if (accepted) {
                                            console.log(this.signUpService.userPlace);
                                            
                                              this.instancesService.ToggleStatusOnline(this.signUpService.userPlace, this.userId);
                                              console.log("estoy true")
                                              console.log(this.userInfo.fixedLocation.name);
                                          } 
                           
                                      })
                                      modal.present();
    
                                  }
                                
                              
                          } catch (error) {
                              console.log(error);
    
                          }
                      } else {
                          let alert = this.alertCtrl.create({
                              title: 'No tienes ningún horario',
                              subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                              buttons: [{
                                      text: 'Mandar mi horario',
                                      handler: () => {
                                          this.navCtrl.push('DriverSchedulePage');
                                      }
                                  },
                                  {
                                      text: 'Cancelar',
                                      role: 'cancel',
                                      handler: () => {
    
                                      }
                                  }
                              ],
                              cssClass: 'alertDanger'
                          });
                          alert.present();
                      }
    
    
    
                  } else {
                      let alert = this.alertCtrl.create({
                          title: '¡oh-uh!',
                          subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                          buttons: [{
                                  text: 'Subir mis documentos',
                                  handler: () => {
                                      this.navCtrl.push('DriverCarRegistrationPage');
                                  }
                              },
                              {
                                  text: 'Cancelar',
                                  role: 'cancel',
                                  handler: () => {
    
                                  }
                              }
                          ],
                          cssClass: 'alertDanger'
                      });
                      alert.present();
                  }
              } else {
                  let alert = this.alertCtrl.create({
                      title: '¡oh-oh!',
                      subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                      buttons: [{
                              text: 'Subir mis documentos',
                              handler: () => {
                                  this.navCtrl.push('DriverCarRegistrationPage');
                              }
                          },
                          {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: () => {
    
                              }
                          }
                      ],
                      cssClass: 'alertDanger'
                  });
                  alert.present();
              }
          }
    
      }
    
    }
    
    
      
      
    
    
    
    
    disconectDriver(){
      if(this.toggleStatus === 'offline'){ 
        //do nothing
        console.log("offline");
        
      }else{
        this.instancesService.ToggleStatusOffline(this.signUpService.userPlace, this.userId);
        //get all reserves from driver
      //   this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.userId).once('value').then((snapReserve)=>{
      //     this.driverReserves = snapReserve.val();
    
      //     console.log(this.driverReserves);
    
          
      //      //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      //     if(snapReserve.val() === null || snapReserve.val() === undefined ){
      //       this.showConectedButton = true;
      //       this.changeColorOffline();
      //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
      //       this.enable();
      //       // this.autocompleteMyDest.input = '';
      //     }else{
      //       let obj = this.driverReserves;
      //     Object.getOwnPropertyNames(obj).forEach((key)=>{
      //       console.log(obj[key]);
      //       //check if user have any user in their reserve
      //       console.log(obj[key].pendingUsers);
            
      //       if (obj[key].pendingUsers !== undefined) {
              
      //         this.fullReserves.push(obj[key])
    
      //       } else {
      //         //there is people in the drivers' reserve
      //         console.log("funciono");
             
      //       }
    
      //     })
      //     }
          
      //   }).then(()=>{
    
      //     //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      //     if(this.driverReserves === null || this.driverReserves === undefined){
      //       this.showConectedButton = true;
      //       this.changeColorOffline();
      //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
      //       this.enable();
      //       // this.autocompleteMyDest.input = '';
    
      //     }else{
      //       if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
      //         this.showConectedButton = true;
      //       this.changeColorOffline();
      //       // this.autocompleteMyDest.input = '';
    
      //       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                            
      //         console.log(snap.val()); 
      //         let obj = snap.val();
      //         Object.getOwnPropertyNames(obj).forEach(key => {
      //           console.log(obj[key]);
      //           if(obj[key].type === 'origin'){
      //                 this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
      //           }else if(obj[key].type === 'destination'){
      //                 this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
      //               }             
      //         })
      //       }).then(()=>{
      //         this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
      //       })
      //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
      //       this.enable();
      //       // this.autocompleteMyDest.input = '';
    
      //       }else{
      //         this.alertOffline();
      //       }
      //     }
      //   })
    
      }  
    }

  goFindride(){

    this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
      let obj = snap.val();
      Object.getOwnPropertyNames(obj).forEach((key)=>{
        
        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

        }else{
          this.instances.scheduleTypeManual(obj[key], this.userId);        
        } 
      })
    })
  }
  createRoute(){
    this.navCtrl.push('DriverSpecifyRoutePage',)
  }
  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  presentAlert(title,text,button) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [button]
    });
    alert.present();
  }
}
