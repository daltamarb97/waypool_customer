import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable, keyframes } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import * as firebase from 'firebase';


@Injectable()
export class DriverGeofireService {

dbRef:any;
geoFire:any;
geoquery1:any;
geoquery2:any;
geoqueryP:any;

driver:any;
origin:any;
destination:any;
name:any;
lastname:any;
phone:any;
carModel:any;
plateNumber:any;
proofToCancelDest:any;
proofToCancelOr:any;

KeyLastTripSaved:any

constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){

 

  // this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
 

}



// setGeofireDest( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
//   this.proofToCancelDest = this.variableName(geofirename);
//   this.dbRef = this.afDB.database.ref('geofireDest/' );
//   this.geoFire = new GeoFire(this.dbRef); 

//   this.geoquery1 = this.geoFire.query({
//     center: [lat, lng],
//     radius: radius
//   })

  
//   this.keyEnteredDest( driverId, keyReserve);
//   this.keyExitedDest(keyReserve);

// console.log('geoquery dest added');
// }

// variableName(variable){
//   var variableName = variable;
//   return variableName;
// }

// setGeofireOr( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
//   this.proofToCancelOr = this.variableName(geofirename);
//   this.dbRef = this.afDB.database.ref('geofireOr/' );
//   this.geoFire = new GeoFire(this.dbRef); 

//   this.geoquery2 = this.geoFire.query({
//     center: [lat, lng],
//     radius: radius
//   })

//   this.keyEnteredOr( driverId, keyReserve);
//   this.keyExitedOr(keyReserve);

//   // if(this.geoquery1){
//   //   this.geoquery1.cancel();
//   // }

//   console.log('geoquery or added');


// }

///////////


setGeofireOrNEWTEST( key, lat, lng){
  this.dbRef = this.afDB.database.ref('/geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });

   
}

setGeofireDestNEWTEST( key, lat, lng){
  this.dbRef = this.afDB.database.ref( '/geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });
}


setGeofireRoute( key, lat, lng){
  this.dbRef = this.afDB.database.ref( '/geofireRoute/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });
}


setGeofireOrOnTrip(Place, key, lat, lng){
  this.dbRef = this.afDB.database.ref(Place + '/geofireOrTrip/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });

   
}

setGeofireDestOnTrip(Place, key, lat, lng){
  this.dbRef = this.afDB.database.ref(Place + '/geofireDestTrip/' );
  this.geoFire = new GeoFire(this.dbRef); 

          this.geoFire.set(key, [lat, lng]).then(function(){
              console.log('location updated');
             }, function(error){
            console.log('error: ' + error)
             });


}

////////////////////


//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredDest( driverId, keyReserve ){
   this.geoquery1.on("key_entered", function(key, location, distance){
    console.log(key);
    setTimeout(()=>{
      this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
       driverId: driverId,
       keyReserve: keyReserve
      })
      console.log('keyentered here');
    }, 3000)
    
    
  }.bind(this))
}


keyExitedDest(keyReserve){
  
  this.geoquery1.on("key_exited", function(key){
    this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove()
  }.bind(this))
}

//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredOr( driverId, keyReserve){
  this.geoquery2.on("key_entered", function(key, location, distance){
   console.log(key);
   this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
    driverId: driverId,
    keyReserve: keyReserve
   })

   this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ driverId + '/' + keyReserve).push({
    userId: key

  })
       
 }.bind(this))
}

keyExitedOr(keyReserve){
 
 this.geoquery2.on("key_exited", function(key){
   this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove()
 }.bind(this))
}

   

public  getMyInfo(userId){
  return this.afDB.object('drivers/'+userId).valueChanges();
  }

public getMyReserves(driverId){
  
  return this.afDB.list('/reserves/' + driverId).valueChanges();
}



public deleteUserListRide(Place, driverId, userId){
  this.afDB.database.ref(Place + '/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
}

public deleteUserListRideTotal(driverId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
}

public onTripUserListRide(driverId, userId){
  this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    onTrip: true
  });
}

deleteUserGeofireDest( keyTrip){
  this.afDB.database.ref('/geofireDest/' + keyTrip).remove().then(()=>{
      console.log("GeofireDest succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}


deleteUserGeofireRoute( keyTrip, ){
  this.afDB.database.ref('/geofireRoute/' + keyTrip).remove().then(()=>{
      console.log("GeofireRoute succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}

deleteUserReserve( userId, keyTrip){
  this.afDB.database.ref('/reservesTest/' + userId + '/' + keyTrip).remove().then(()=>{
      console.log("reserve succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}

deleteUserGeofireOr( keyTrip){
  this.afDB.database.ref('/geofireOr/' + keyTrip).remove().then(()=>{
      console.log("GeofireOr succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
  
  
}



deleteUserGeofireOrTrip(Place, keyTrip){
  this.afDB.database.ref(Place + '/geofireOrTrip/' +  keyTrip).remove().then(()=>{
      console.log("geofireOrTrip succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
}



deleteUserGeofireDestTrip(Place, keyTrip){
  this.afDB.database.ref(Place + '/geofireDestTrip/' + keyTrip).remove().then(()=>{
      console.log("geofireDestTrip succesfully removed");
  }).catch(error =>{
      console.log(error);
  })
 
}

public getInfoUser(userId){
 return this.afDB.object('users/' + userId).valueChanges();
}

cancelGeoqueryDest(geofirename){
  if(this.proofToCancelDest === geofirename){
    if(this.geoquery1){
      this.geoquery1.cancel()
      console.log('geoqueryDest deleted');
    }else{
      console.log('dont dest query')
    }
  }
}

cancelGeoqueryOr(geofirename){
  if(this.proofToCancelOr === geofirename){
    if(this.geoquery2){
      this.geoquery2.cancel()
      console.log('geoqueryOr deleted');
  
    }else{
      console.log('dont or query')
    }
  }
}


// set a new node on firebase which is the location of the Place
setLocationPlace(place, key, lat, lng){
  this.dbRef = this.afDB.database.ref(place + '/geofirePlace/' );
  this.geoFire = new GeoFire(this.dbRef); 
    this.geoFire.set(key, [lat, lng]).then(function(){
    console.log('location updated');
    }, function(error){
    console.log('error: ' + error)
  });
}

// set geoquery that determines if the person is in place
setGeofirePlace(place, radius:number, lat, lng, driverId):void{ 
  
  this.dbRef = this.afDB.database.ref(place + '/geofirePlace/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoqueryP = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredPlace(place, driverId);

console.log('geoquery place added');
}

keyEnteredPlace(place, driverId){
  this.geoqueryP.on("key_entered", function(key){
   this.afDB.database.ref(place + '/drivers/' + driverId ).update({
     geofireOrigin: true
   }).then(()=>{
     console.log('geofireOrigin = true');
   })
   console.log(key + ' detected')
 }.bind(this))

}

cancelGeoqueryPlace(){
  if(this.geoqueryP){
    this.geoqueryP.cancel()
    console.log('geoqueryU deleted');

  }else{
    console.log('dont uni query')
  }
  
}

public cancelGeofireOrigin(place, driverId){
  this.afDB.database.ref(place + '/drivers/' + driverId).update({
    geofireOrigin: false
  }).then(()=>{
    console.log('geofireOrigin = false');
  })
}

public setHouseAddress(place, driverId, lat, lng){
  this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/coordinates').update({
    lat:lat,
    lng:lng
  })
}

public setHouseAddressName(place, driverId, name){
  this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/').update({
    name: name
  })
}

public getLocationPlace(place){
   return this.afDB.object('/allPlaces/'+ place).valueChanges();
 }


 deleteKeyUserLMU(place,userId){
  this.afDB.database.ref(place +'/users/' + userId +'/keyTrip/').remove();
}

setOntripFalseUserLMU(place,userId){
  this.afDB.database.ref(place +'/users/' + userId).update({
      onTrip: false
  })
}

deleteDriverFromLMUofUser(place,userId, keyTrip){
  this.afDB.database.ref(place +'/users/' + userId +'/availableReserves/' + keyTrip).remove();
}


}