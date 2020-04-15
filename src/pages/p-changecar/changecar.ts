import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverInstancesService } from '../../services/d-instances.services';
import { GroupsService } from '../../services/groups.service';

 

@IonicPage()
@Component({
  selector: 'page-changecar',
  templateUrl: 'changecar.html',
})
export class ChangeCarPage {
  accepted:any;
  @ViewChild('imageTaxi',{read:ElementRef}) imageTaxi;
  @ViewChild('imageOtherCar',{read:ElementRef}) imageOtherCar;
  otherCar:boolean;
  taxi:boolean;
  crew:any;
  crewNavParams:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public GroupsService:GroupsService, public viewCtrl: ViewController,public renderer: Renderer ,public alertCtrl: AlertController, public signUpService: DriverSignUpService, public angularFireAuth: AngularFireAuth, private instances: DriverInstancesService, private afDB: AngularFireDatabase) {
    this.crew= this.navParams.get('crew'); 

  }


  dismiss(){
    this.viewCtrl.dismiss(this.accepted);

  }
  
  selectImageOtherCar(){
    // this is just to change the css
    this.renderer.setElementStyle(this.imageOtherCar.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.imageOtherCar.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.imageOtherCar.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.imageTaxi.nativeElement,'border-width','0px')
    this.otherCar = true;
    this.taxi = false;
  
  }
  selectImageTaxi(){
    // this is just to change the css
    this.renderer.setElementStyle(this.imageTaxi.nativeElement,'border-width','3px')
    this.renderer.setElementStyle(this.imageTaxi.nativeElement,'border-style','solid')
    this.renderer.setElementStyle(this.imageTaxi.nativeElement,'border-color','green')
  
    this.renderer.setElementStyle(this.imageOtherCar.nativeElement,'border-width','0px')
    this.otherCar = false;
    this.taxi = true;
  }

  confirm(){
    if(this.otherCar === null || this.taxi === null){
      let alert = this.alertCtrl.create({
        title: 'información incompleta',
        subTitle: 'Selecciona algún tipo de transporte.',
        buttons: ['OK']
      });
      alert.present();
    }else{
      if(this.otherCar === true){
        // if user select otherCar change information in firebase
        this.GroupsService.chooseOtherCar(this.crew);
        this.dismiss();
        console.log("escogí otro carro");

      } else if (this.taxi === true){
        // if user select taxi change information in firebase
        this.GroupsService.chooseTaxi(this.crew);        
        this.dismiss();
        console.log("escogi taxi");

      }
    }
  }
}
