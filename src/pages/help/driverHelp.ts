import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'driver-page-help',
  templateUrl: 'driverHelp.html'
})
export class DriverHelpPage {
  typeOfSituation:string;
  info:string;
  constructor(public navCtrl: NavController) {

  }
  suggestion(){
    this.typeOfSituation='Sugerencia'
    this.info='Amamos las sugerencias ya que nos permiten mejorar cada vez más la aplicación, ¡Gracias de parte de todo el equipo de Waypool!'
    this.navCtrl.push('DriverSupportPage',{typeOfSituation:this.typeOfSituation,info:this.info})
  }
  myAccount(){
    this.typeOfSituation='Mi Cuenta'
    this.info='Escríbenos cualquier cosa relacionada con tu cuenta' 
    this.navCtrl.push('DriverSupportPage',{typeOfSituation:this.typeOfSituation,info:this.info})
  }
  trip(){
    this.typeOfSituation='Viaje'
    this.info='¿Haz tenido algún problema en algún viaje? ¡coloca el ID de tu viaje al comenzar el mensaje y con gusto te ayudaremos! ' 

    this.navCtrl.push('DriverSupportPage',{typeOfSituation:this.typeOfSituation,info:this.info})
  }
  bug(){
    this.typeOfSituation='Problema con la App'
    this.info=' Muchas gracias por informarnos de estos problemas que ayudan a mejorar la usabilidad de la App cada día mas' 

    this.navCtrl.push('DriverSupportPage',{typeOfSituation:this.typeOfSituation,info:this.info})
  }
  paymentProblem(){
    this.typeOfSituation='Problema de Pago'
    this.info='¿Haz tenido algún tipo de problema relacionado con la tarjeta con tu tarjeta de crédito? Descríbenos con detalle y nos comunicamos contigo lo más pronto posible' 

    this.navCtrl.push('DriverSupportPage',{typeOfSituation:this.typeOfSituation,info:this.info})
  }


  
}