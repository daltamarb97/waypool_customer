import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, ModalController, IonicPage, NavParams  } from 'ionic-angular';
import { BoundElementPropertyAst } from '@angular/compiler';


@IonicPage()

@Component({
  selector: 'page-creategroup',
  templateUrl: 'creategroup.html'
})
export class CreateGroupPage {
  @ViewChild('imageTaxi',{read:ElementRef}) imageTaxi;
  @ViewChild('imageOtherCar',{read:ElementRef}) imageOtherCar;
  otherCar:boolean;
  taxi:boolean;
  group:any;
  origin:any;
  destination;
  startHour;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams,public renderer: Renderer) {
    this.origin= this.navParams.get('origin');
    this.destination= this.navParams.get('destination') 

  }
  
//  confirmpopup(){
//     let modal = this.modalCtrl.create(ConfirmpopupPage);
//     modal.present();
//  }
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
createGroup(){
  if(this.startHour === null|| this.startHour === undefined || this.otherCar === undefined || this.taxi === undefined){
    //create service for group
    this.navCtrl.push('ReservetripPage')
  }
}
}