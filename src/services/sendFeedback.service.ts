import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";


@Injectable()
export class sendFeedbackService {

constructor(public afDB: AngularFireDatabase){
              
    }
    public sendFeedback(place, title, info, name, lastname, number, userId){
        this.afDB.database.ref(place + '/feedback/' + title +'/users/'+ userId).update({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        })
    }
 
}