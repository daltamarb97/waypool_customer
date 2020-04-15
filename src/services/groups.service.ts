import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class GroupsService {

   
    constructor(public afDB: AngularFireDatabase){    }
    //cant use this because it gets your same adress
   
    public getCrewsIJoinedId( userUid){
        //get crews'keys of that i have joined
        return  this.afDB.list('/usersTest/'+ userUid+'/crewsIJoined').valueChanges();

    }
    public getMyCrews(userUid){
        //get crews that i have created  
          return  this.afDB.list('crewsTest/' + userUid).valueChanges();

        }
        public getSpecificCrew(userUid,crew){
            //get crews that i have created  
              return  this.afDB.object('/crewsTest/'+ crew.admin.userId +'/'+ crew.crewId).valueChanges();
    
            }
    public getMyReservesUser( userUid){
        //get reserves of that i have enter
        return  this.afDB.list('/usersTest/'+ userUid+'/myReserves').valueChanges();

    }
    public getMembersCrew( userUid,crew){
        return  this.afDB.list('/crewsTest/'+ crew.admin.userId +'/'+ crew.crewId+'/members/').valueChanges();

    }


    public chooseTaxi(crew){
     
        this.afDB.database.ref('/crewsTest/'+ crew.admin.userId +'/'+ crew.crewId+'/transport/').set("taxi");

    }
    public chooseOtherCar(crew){
     
        this.afDB.database.ref('/crewsTest/'+ crew.admin.userId +'/'+ crew.crewId+'/transport').set("otherCar");

    }
   
    public eliminateCrewUser(userUid,crewId){    
        //eliminate keyTrip from user's node to eliminate access to that crew
      this.afDB.database.ref( '/usersTest/'+userUid+'/myCrews/'+ crewId).remove();
  
     }
}
