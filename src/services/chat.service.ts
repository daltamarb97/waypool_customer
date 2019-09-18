import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class chatsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    public getChatsFromReserve(university,reserveKey,driverUid){
      //trae todos los chats del usuario
      return  this.afDB.list(university+'/reserves/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
  } 
  public getChatsFromTrip(university,reserveKey,driverUid){
    //trae todos los chats del usuario
    return  this.afDB.list(university+'/trips/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
} 
public pushMessageUserInReserve(university,reserveKey,driverUid,userUid,message,name){
  //envía todos los chats del usuario
this.afDB.database.ref(university+'/reserves/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});
}    

public pushMessageUserInTrip(university,reserveKey,driverUid,userUid,message,name){
//envía todos los chats del usuario
this.afDB.database.ref(university+'/trips/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});

}
     }

     



    

