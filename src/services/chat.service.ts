import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class chatsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    public getChatsFromReserve(reserveKey,driverUid){
      //trae todos los chats del usuario
      return  this.afDB.list('/reservesTest/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
  } 
  public getChatsFromTrip(reserveKey,driverUid){
    //trae todos los chats del usuario
    return  this.afDB.list('/tripsTest/'+driverUid+'/'+reserveKey+'/chat/messages/').valueChanges();
} 
public pushMessageUserInReserve(reserveKey,driverUid,userUid,message,name){
  //envía todos los chats del usuario
this.afDB.database.ref('/reservesTest/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});
}    

public pushMessageUserInTrip(reserveKey,driverUid,userUid,message,name){
//envía todos los chats del usuario
this.afDB.database.ref('/tripsTest/'+driverUid+'/'+reserveKey+'/chat/messages/').push({
  message:message,
  uid:userUid,
  name:name

});

}
     }

     



    

