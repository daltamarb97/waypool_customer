import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';


@IonicPage()
@Component({
  selector: 'driver-page-verification-images',
  templateUrl: 'driver-verification-images.html',
})
export class DriverVerificationImagesPage {
//everything that has number 1 refers to license and number 2 refers to Id (also in HTML)

  driver;
  driverInfo;
  namePicture:any = "Cédula" ;
  description:any = "Sube una foto clara de tu" ;
  img1 = "Carné de la U";
  img2 = "Cédula";
  
  des1 = "Sube una foto clara de tu";
  picToView:string = "assets/imgs/v2.png";;
  picToViewCarne:string= "assets/imgs/v2.png";
  picToViewId:string ="assets/imgs/v4.png";
  data;
  accepted1:boolean;
  accepted2:boolean;
  showCarne:boolean = true;
  showId:boolean = false;
  cameraPicCarne:boolean = false;
  cameraPicId:boolean = false;


  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, public AngularFireauth: AngularFireAuth, public alertCtrl: AlertController, public SignUpService:DriverSignUpService) {
    this.driver =  this.AngularFireauth.auth.currentUser.uid;

    this.SignUpService.getMyInfoDriver( this.driver).subscribe(user=>{
      this.driverInfo = user
      if(this.driverInfo.documents){
        if(this.driverInfo.documents.carne == true ){
          this.picToViewCarne = "assets/imgs/v2.3.png";
          this.picToView =  "assets/imgs/v2.3.png";
        }else if(this.driverInfo.documents.id == true ){
          this.picToViewId = "assets/imgs/_v4.3.png";
        }else if(this.driverInfo.documents.carne == false){
          this.picToViewCarne = "assets/imgs/v2.2.png";
          this.picToView =  "assets/imgs/v2.2.png";
        }else if(this.driverInfo.documents.id == false ){
          this.picToViewId = "assets/imgs/v4.2.png";
        }else if(this.driverInfo.documents.carne == undefined ){
          this.picToViewCarne = "assets/imgs/v2.png";
        }else if(this.driverInfo.documents.id == undefined ){
          this.picToViewId = "assets/imgs/v4.png";
        }
      }
    })

    
    
    
  }

  skipVerification(){
    this.viewCtrl.dismiss()
  }


  usageCameraCarne(){
    

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const picturesDrivers = storage().ref(this.SignUpService.userPlace + '/verificationDocuments/' + this.driver + '/' + this.data);


      
      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
      }).catch((error)=>{
        console.log(error);
      const alert = this.alertCtrl.create({
        title: 'hubo un error',
        subTitle: 'intenta subir el documento otra vez',
        buttons: ['OK']
      });
      alert.present();
      })

      

      this.picToViewCarne = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";
      this.SignUpService.pushDocsCarne( this.driver);
      

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
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      const picturesDrivers = storage().ref(this.SignUpService.userPlace + '/verificationDocuments/' + this.driver + '/' + this.data)



      picturesDrivers.putString(base64Image, 'data_url').then(()=>{
        const alert = this.alertCtrl.create({
          title: '¡HECHO!',
          subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
          buttons: ['OK']
        });
        alert.present();
      }).catch((error)=>{
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
      this.SignUpService.pushDocsId( this.driver);

      

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
    if(this.driverInfo.documents.carne == undefined){
      this.picToViewCarne = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";
    }else if (this.driverInfo.documents.carne == false){
      this.picToViewCarne = "assets/imgs/v2.2.png";
      this.picToView = "assets/imgs/v2.2.png";
    }else if(this.driverInfo.documents.carne == true){
      this.picToViewCarne = "assets/imgs/v2.3.png";
      this.picToView = "assets/imgs/v2.3.png";
    }else{
      this.picToViewCarne = "assets/imgs/v2.png";
      this.picToView = "assets/imgs/v2.png";
    }
  }
  
    this.namePicture = this.img1;
    this.description = this.des1;
    this.data = "carné";
    this.showCarne = true;
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
    this.data = "cédula";
    this.showId = true;
    this.showCarne = false;
 
  };



}
