import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, App } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the CarRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'driver-page-car-registration-login',
  templateUrl: 'driver-car-registration-login.html',
})
export class DriverCarRegistrationLoginPage {
  //everything that has number 1 refers to license and number 2 refers to Id (also in HTML)
  driver;
  driverInfo;
  namePicture:any = "Licencia" ;
  description:any = "Sube una foto clara de tu" ;
  img1 = "Licencia";
  img2 = "Cédula";
  
  des1 = "Sube una foto clara de tu";
  picToView:string = "assets/imgs/v2.png";;
  picToViewLicense:string= "assets/imgs/v2.png";
  picToViewId:string ="assets/imgs/v4.png";
  data;
  accepted1:boolean;
  accepted2:boolean;
  showLicense:boolean = true;
  showId:boolean = false ;
  cameraPicLicense:boolean = false;
  cameraPicId:boolean = false;
  unsubscribe = new Subject;
  showContinue:boolean = false;
  licenceWasUploaded:boolean = false;
  idWasUploaded:boolean= false;
  defaultZone:any;

  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, public AngularFireauth: AngularFireAuth, public alertCtrl: AlertController, public SignUpService:DriverSignUpService, public loadingCtrl: LoadingController, public app: App, private afDB: AngularFireDatabase) {
    this.driver =  this.AngularFireauth.auth.currentUser.uid;
    this.defaultZone = navParams.get('defaultZone');
    console.log(this.defaultZone);
    
    this.SignUpService.userPlace = this.defaultZone;

    // this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.driver).takeUntil(this.unsubscribe).subscribe(user=>{
    //   this.driverInfo = user
    //   if(this.driverInfo.documents){
    //     if(this.driverInfo.documents.license == true ){
    //       this.picToViewLicense = "assets/imgs/v2.3.png";
    //       this.picToView =  "assets/imgs/v2.3.png";
    //     }else if(this.driverInfo.documents.id == true ){
    //       this.picToViewId = "assets/imgs/_v4.3.png";
    //     }else if(this.driverInfo.documents.license == false){
    //       this.picToViewLicense = "assets/imgs/v2.2.png";
    //       this.picToView =  "assets/imgs/v2.2.png";
    //       this.showContinue = true;
    //     }else if(this.driverInfo.documents.id == false ){
    //       this.picToViewId = "assets/imgs/v4.2.png";
    //       this.showContinue = true;
    //     }else if(this.driverInfo.documents.license == undefined ){
    //       this.picToViewLicense = "assets/imgs/v2.png";
    //       this.picToView =  "assets/imgs/v2.png";
    //     }else if(this.driverInfo.documents.id == undefined ){
    //       this.picToViewId = "assets/imgs/v4.png";
          
    //     }
    //   }
    // })
  }

  ionViewDidLeave(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
  }
  

  usageCameraLicense(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();


      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref(this.driverInfo.company + '/documentsDrivers/' + this.driver + '/' + this.data);
      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
        this.licenceWasUploaded = true;
      }).catch((error)=>{
        loading.dismiss();
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

      

      this.picToViewLicense = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";

      this.afDB.database.ref('allCities/' + this.driverInfo.city + '/allPlaces/' + this.driverInfo.company + '/zones').once('value').then((snap)=>{
        let obj = snap.val();
        Object.getOwnPropertyNames(obj).forEach((key)=>{

          if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){

          }else{
            // this.SignUpService.pushDocsL(obj[key], this.driver);
          }
        })
      })
      

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  usageCameraId(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
          });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const picturesDrivers = storage().ref(this.driverInfo.company + '/documentsDrivers/' + this.driver + '/' + this.data);
      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
        this.idWasUploaded = true;
      }).catch((error)=>{
        loading.dismiss();
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

      this.picToViewId = "assets/imgs/v4.2.png";
      this.picToView = "assets/imgs/v4.2.png";


      this.afDB.database.ref('allCities/' + this.driverInfo.city + '/allPlaces/' + this.driverInfo.company + '/zones').once('value').then((snap)=>{
        let obj = snap.val();
        Object.getOwnPropertyNames(obj).forEach((key)=>{

          if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
            
          }else{
            // this.SignUpService.pushDocsId(obj[key], this.driver);
          }
        }) 
      })
      

     }, (err) => {
      console.log(err);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
     });
  }

  changeNamePicture1(){

  if(this.driverInfo.documents){
    if(this.driverInfo.documents.license == undefined ){
      this.picToViewLicense = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";

    
    }else if (this.driverInfo.documents.license == false){
      this.picToViewLicense = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";

    }else if(this.driverInfo.documents.license == true){
      this.picToViewLicense = "assets/imgs/v2.3.png";
      this.picToView = "assets/imgs/v2.3.png";

    }else{
      this.picToViewLicense = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";
      this.showLicense = true;

    }
  }
  
    this.namePicture = this.img1;
    this.description = this.des1;
    this.data = "licencia";
    this.showLicense = true;
    this.showId = false;
  };

  changeNamePicture2(){
  if(this.driverInfo.documents){
    if(this.driverInfo.documents.id == undefined){
      this.picToViewId = "assets/imgs/v4.png";
      this.picToView = "assets/imgs/v4.png";

    }else if(this.driverInfo.documents.id == false){
      this.picToViewId = "assets/imgs/v4.2.png";
      this.picToView = "assets/imgs/v4.2.png";

    }else if(this.driverInfo.documents.id == true){
      this.picToViewId = "assets/imgs/_v4.3.png";
      this.picToView = "assets/imgs/_v4.3.png";

    }else{
      this.picToViewId = "assets/imgs/v4.png";
      this.picToView = "assets/imgs/v4.png";

      
    }

  }
    
    this.namePicture = this.img2;
    this.description = this.des1;
    this.data = "cedula";
    this.showId = true;
    this.showLicense = false;
 
  };

  skip(){
    this.app.getRootNav().push('DriverSchedulePage', {defaultZone: this.defaultZone});
  }

  goSchedulePage(){
    if(this.licenceWasUploaded === false){
      const alert = this.alertCtrl.create({
        title: 'Puedes continuar pero aún te falta subir una foto de tu licencia',
        subTitle: 'Puedes subir esta foto en otro momento, pero tardará más tu aprobación de documentos',
        buttons: [
          {
            text: 'Subir Licencia',
            role: 'cancel'
         },
         {
           text: 'Hacer en otro momento',
           handler: ()=> {
            // alert.dismiss();
            this.skip()

           }
         }
      ]
      });
      alert.present();
    }else if(this.idWasUploaded === false){
      const alert = this.alertCtrl.create({
        title: 'Puedes continuar pero aún te falta subir una foto de tu cédula',
        subTitle: 'Puedes subir esta foto en otro momento, pero tardará más tu aprobación de documentos',
        buttons: [
          {
            text: 'Subir Cédula',
            role: 'cancel'
         },
         {
           text: 'Hacer en otro momento',
           handler: ()=> {
            // alert.dismiss();
            this.skip();

           }
         }
      ]
      });
      alert.present();
    }else{
      this.skip();
    
    }
  }


} 