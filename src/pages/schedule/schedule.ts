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
  toggleOnline: any;
  houseAddress:any;
  workAddress:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DriverSignUpService:DriverSignUpService,public instancesService: DriverInstancesService ,public modalCtrl: ModalController, public signUpService: DriverSignUpService, private angularFireAuth: AngularFireAuth, public app: App, public alertCtrl: AlertController, private camera: Camera, public loadingCtrl: LoadingController, private instances: DriverInstancesService, private afDB: AngularFireDatabase) {
    this.defaultZone = this.navParams.get('defaultZone');
    console.log(this.defaultZone);
    this.userId = this.angularFireAuth.auth.currentUser.uid;


    this.houseAddress = { input: '' };
    this.workAddress = { input: '' };

    if(this.defaultZone){
      // this.signUpService.userPlace = this.defaultZone;
    }else{
      
    }
    this.DriverSignUpService.getToggleStatus( this.userId)
    .subscribe(  toggleOnline => { 
      
      this.toggleOnline = toggleOnline; 
      console.log(toggleOnline );
      console.log(this.userId);
      
      if(this.toggleOnline === true){
        this.showConectedButton = true;
        console.log("estoy online");
        
      }else{
        this.showConectedButton = false;
        console.log("estoy offline");
      } 
    });


    this.signUpService.getMyInfo( this.userId)
    .subscribe(  tripsInfo => { 
      this.tripsInfo = tripsInfo;
      if(this.tripsInfo.workAddress && this.tripsInfo.houseAddress){

        this.workAddress.input = this.tripsInfo.workAddress.name; 
        this.workAddress.input = this.tripsInfo.houseAddress.name;
      }else{
        console.log('aun no ha puesto ningunas direcciones para schedule');
        
      }
      
    });



    this.afDB.database.ref( '/driversTest/' + this.userId).once('value').then((snap)=>{
      this.userInfo = snap.val();        
    });


        this.signUpService.getSchedule( this.userId).subscribe(hour => {
          this.schedules = hour;
          console.log(this.schedules);
          if(this.schedules.length !== 0){
            this.afDB.database.ref( '/driversTest/' + this.userId + '/scheduleType/').once('value').then((snap)=>{
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
    
    console.log(     this.userId);

    this.afDB.database.ref( '/driversTest/' + this.userId ).once('value').then((snap)=>{
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

    this.afDB.database.ref( '/driversTest/' + this.userId ).once('value').then((snap)=>{
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
        this.instances.scheduleTypePicture( this.userId);
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

        this.instances.scheduleTypePicture( this.userId);
     

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
      if (this.toggleOnline === true) {
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
                  if (this.userInfo.documents.carne == true && this.userInfo.documents.id == true) {
                      if (this.userInfo.schedule) {
                          try {
                              if (this.houseAddress == null || this.workAddress == null  || this.houseAddress == undefined || this.workAddress == undefined ) {
                                  this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa y oficina sea correcta', 'Ok');
                    
                              } else {

                                //CREAR NUEVO MODAL SLO PA ACTIVAR HORARIOS

                                
                                      // let modal = this.modalCtrl.create('DriverConfirmpricePage');
                                      // modal.onDidDismiss(accepted => {
                                      //     if (accepted) {
 
                                      //         this.instancesService.ToggleStatusOnline( this.userId);
                                      //         console.log("estoy true")
                                      //         console.log(this.userInfo.fixedLocation.name);
                                      //     } 
                           
                                      // })
                                      // modal.present();
    
                                  }
                                
                              
                          } catch (error) {
                              console.log(error);
    
                          }
                      } else {
                          let alert = this.alertCtrl.create({
                              title: 'No tienes ningún horario',
                              subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                              buttons: ['OK'],
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
                                      this.navCtrl.push('DriverUserVerificationPage');
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
                                  this.navCtrl.push('DriverUserVerificationPage');
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
      if(this.toggleOnline === false){ 
        //do nothing
        console.log("offline");
        
      }else{
        this.instancesService.ToggleStatusOffline( this.userId);
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

    this.instances.scheduleTypeManual( this.userId);   

  }
  createRoute(){
    this.navCtrl.push('DriverSpecifyRoutePage')
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
 