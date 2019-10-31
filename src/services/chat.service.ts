import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class chatsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    public getChatsFromReserve(place,reserveKey,driverUid){
      //trae todos los chats del usuario
      return  this.afDB.list(place+'/reserves/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
  } 
  public getChatsFromTrip(place,reserveKey,driverUid){
    //trae todos los chats del usuario
    return  this.afDB.list(place+'/trips/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
} 
public pushMessageUserInReserve(place,reserveKey,driverUid,userUid,message,name){
  //envía todos los chats del usuario
this.afDB.database.ref(place+'/reserves/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});
}    

public pushMessageUserInTrip(place,reserveKey,driverUid,userUid,message,name){
//envía todos los chats del usuario
this.afDB.database.ref(place+'/trips/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});

}
     }

     



    

