import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";


@Injectable()
export class DriverSendFeedbackService {

constructor(public afDB: AngularFireDatabase, public alertCtrl: AlertController){
              
    }
    
    public sendFeedback(place, title, info, name, lastname, number, userId){
        this.afDB.database.ref(place + '/feedback/' + title +'/drivers/'+ userId).set({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        }).then(()=>{
            let alert = this.alertCtrl.create({
                title: 'Hemos recibido tu mensaje',
                subTitle: 'Revisaremos tu inquietud y nos pondremos en contácto contigo lo antes posible',
               buttons: ['OK'],
                
              });
              alert.present();
        })
    }
 
}