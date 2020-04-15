import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

/**
 * Generated class for the TypeOfLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-of-login',
  templateUrl: 'type-of-login.html',
})
export class TypeOfLoginPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeOfLoginPage');
  }


  goSignUpCorp(){

    let modal = this.modalCtrl.create('SignupPage', {typeOfSignUp: 'corp'});
    modal.onDidDismiss((loginGreenFlag)=>{
      if(loginGreenFlag === true){
        this.navCtrl.setRoot('LoginPage');   
      }else{
        this.navCtrl.setRoot('DriverUserVerificationPage'); 
      }
      
    })
    modal.present();
  }



  goSignUpPersonal(){
    const alert = this.alertCtrl.create({
      title: '¿estás seguro de registrarte con correo personal?',
      subTitle: 'El proceso de registro con un correo corporativo es mucho más rápido. Sin embargo, si tu empresa no cuenta con correos corporativos, ¡esta es tu opción de registro!',
      buttons: [
          {
              text: 'Estoy Seguro',
              handler: () => {

                                
                let modal = this.modalCtrl.create('SignupPage', {typeOfSignUp: 'personal'});
                modal.onDidDismiss((loginGreenFlag)=>{
                  if(loginGreenFlag === true){
                    this.navCtrl.setRoot('LoginPage');   
                  }else{
                    this.navCtrl.setRoot('DriverUserVerificationPage'); 
                  }
                  
                })
                modal.present();
              }
          },
          {
            text: 'Registrarme con correo corporativo',
            role: 'cancel',
          }
      ]
  });
  alert.present();
    
  }

}
