import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";
import { reservesService } from "./reserves.service";
import { SignUpService } from "./signup.services";
import { Subject } from "rxjs";

@Injectable()
export class geofireService {

    dbRef;
    geoFire;
    key;
    user:any;
    geoqueryU:any;

    proofToCancelDest:any;
    proofToCancelOr:any; 
    
    geoquery1:any;
    geoquery2:any;
    geoquery2LMU:any;
    geoquery1LMU:any;
    driverOnNodeOr:any;
    driverOnNodeDest:any;
    keyenteredOr:any;
    keyexitedOr:any;

    constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth, public reservesService: reservesService, private signUpServices: SignUpService){
    }


    setGeofireOr(place, radius:number, lat, lng, userId ):void{ 
  this.dbRef = this.afDB.database.ref(place + '/geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery2 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })
 
    this.keyEnteredOr( userId, place );
    this.keyExitedOr( userId, place );
  
  

  console.log('geoquery or added');


}


cancelGeofireOr(){
    if(this.geoquery2){
    this.geoquery2.cancel();
    }else{
    console.log('no hay geoqueryOr');
    }
}


//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredOr( userId, place ){
    this.keyenteredOr = this.geoquery2.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key
     }).then(()=>{
       //get driverId from geofireOr node
       
        return this.afDB.database.ref(place + '/geofireOr/'+ key).once('value').then((snap) => {
            this.driverOnNodeOr = snap.val();

            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeOr.driverId
    
            })  
        })

     })


         
   }.bind(this))
  }


  
  keyExitedOr( userId, place ){
   
   this.keyexitedOr = this.geoquery2.on("key_exited", function(key){
     this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }




  setGeofireDest(place, radius:number, lat, lng, userId):void{ 
  this.dbRef = this.afDB.database.ref(place + '/geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery1 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  
  this.keyEnteredDest( userId, place);
  this.keyExitedDest(userId, place);

console.log('geoquery dest added');
}

cancelGeofireDest(){
    if(this.geoquery1){
        this.geoquery1.cancel();
    }else{
        console.log('no hay geoqueryDest')
    }
}

keyEnteredDest( userId, place ){
    this.geoquery1.on("key_entered", function(key, location, distance){
     console.log(key);

     this.afDB.list(place + '/geofireDest/'+ key).valueChanges().subscribe((driverOnNode)=>{
        this.driverOnNodeDest = driverOnNode;
    })

       this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
        keyReserve: key
       }).then(()=> {
           return this.afDB.database.ref(place + '/geofireDest/'+ key).once('value').then((snap) => {
            this.driverOnNodeDest = snap.val();

            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeDest.driverId
    
            })  
        })
       })
       console.log('keyentered here');
     
   }.bind(this))
 }
 
 
 keyExitedDest(userId, place){
   
   this.geoquery1.on("key_exited", function(key){
     this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
 }


 setGeofireOrLMU(place, radius:number, lat, lng, userId):void{ 
    this.dbRef = this.afDB.database.ref(place + '/geofireOrTrip/' );
    this.geoFire = new GeoFire(this.dbRef); 
  
    this.geoquery2LMU = this.geoFire.query({
      center: [lat, lng],
      radius: radius
    })
  
    this.keyEnteredOrLMU( userId, place );
    this.keyExitedOrLMU( userId, place );
  
    console.log('geoquery or added');
  
  
  }

  cancelGeofireOrLMU(){
    if(this.geoquery2LMU){
        this.geoquery2LMU.cancel();
    }else{
        console.log('no hay geoqueryOr LMU')
    }
}




  keyEnteredOrLMU( userId, place ){
    this.geoquery2LMU.on( "key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key,
      LMU: true
     }).then(()=>{
       //get driverId from geofireOr node
        return this.afDB.database.ref(place + '/geofireOrTrip/'+ key).once('value').then((snap) => {
            this.driverOnNodeOr = snap.val();

            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeOr.driverId
    
            })  
        })
     })

    //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
    //   userId: userId
  
    // })
         
   }.bind(this))
  }
  
  
  keyExitedOrLMU( userId, place ){
   
   this.geoquery2LMU.on("key_exited", function(key){
     this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }



  setGeofireDestLMU(place, radius:number, lat, lng, userId):void{ 
    this.dbRef = this.afDB.database.ref(place + '/geofireDestTrip/' );
    this.geoFire = new GeoFire(this.dbRef); 
  
    this.geoquery1LMU = this.geoFire.query({
      center: [lat, lng],
      radius: radius
    })
  
    this.keyEnteredDestLMU( userId, place);
    this.keyExitedDestLMU( userId, place);
  
    console.log('geoquery Dest added');
  
  
  }

  cancelGeofireDestLMU(){
    if(this.geoquery1LMU){
    this.geoquery1LMU.cancel();
    }else{
        console.log('no hay geoqueryDestLMU');
    }
}




  keyEnteredDestLMU( userId, place){
    this.geoquery1LMU.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key,
      LMU: true
     }).then(()=>{
       //get driverId from geofireOr node
       return this.afDB.database.ref(place + '/geofireDestTrip/'+ key).once('value').then((snap) => {
        this.driverOnNodeDest = snap.val();

        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
            driverId: this.driverOnNodeDest.driverId

            })  
        })
     })


         
   }.bind(this))
  }
  
  
  keyExitedDestLMU( userId, place){
   
   this.geoquery1LMU.on("key_exited", function(key){
     this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }

    removeKeyGeofire(key){
        this.dbRef = this.afDB.database.ref('geofire/' );
        this.geoFire = new GeoFire(this.dbRef); 
        
        this.geoFire.remove(key).then(()=>{
            console.log("Provided key has been removed from GeoFire")
        }, (error)=>{
            console.log(error);
        })
    }

    getDriversAvailableForUser(userId){
       return this.afDB.list('/users/' + userId + '/trips/driversListRide/').valueChanges();
    }
        // OLD
    // showOnDriver(driverId, userId, origin, destination, name, lastname, phone, note){
    //     this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    //         origin: origin,
    //          destination: destination,
    //          name: name,
    //          lastname: lastname,
    //          phone: phone,
    //          userId: userId,
    //          note:note,
    //     });
    // }
    pushToMyReserve(place, keyReserve,driverId,userId){
        this.afDB.database.ref(place +'/users/' + userId +'/myReserves/'+ keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId            
        });
    }
    saveKey(place, keyReserve,driverId,userId){
        this.afDB.database.ref(place +'/users/' + userId +'/keyTrip/').set({
            keyTrip: keyReserve,
            driverId: driverId            
        });
    }

    deleteKey(place,userId){
        this.afDB.database.ref(place +'/users/' + userId +'/keyTrip/').remove();
    }

    deleteDriverFromLMU(place,userId, keyTrip){
        this.afDB.database.ref(place +'/users/' + userId +'/availableReserves/' + keyTrip).remove();
    }

    setOntripFalse(place,userId){
        this.afDB.database.ref(place +'/users/' + userId).update({
            onTrip: false
        })
    }

    joinReserve(place, company, keyReserve,driverId, userId, origin, destination, name, lastname, phone, distance, verifiedPerson){
        this.afDB.database.ref(place + '/reserves/' + driverId +'/'+keyReserve+ '/pendingUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             distance:distance,
             verifiedPerson: verifiedPerson,
             company:company       
        }).catch((err)=>{
            console.log(err)
        })
    }


    deleteAvailableReserve(place, userId, keyReserve){
        this.afDB.database.ref(place + '/users/'+ userId + '/availableReserves/' + keyReserve).remove()
        .catch((err)=>{
            console.log(err)
        })
    }

    deleteReserveFromAvailableReserves(place, userId, keyPush){
        this.afDB.database.ref(place + '/users/' + userId +'/availableReserves/' + keyPush).remove();
    }

    
    
    deleteUserGeofireDest(userId){
        this.afDB.database.ref('geofireDest/' + userId).remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })
        
        
    }

    deleteUserGeofireOr(userId){
        this.afDB.database.ref('geofireOr/' + userId).remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })

    }



    deleteGeofireOr(){
        this.afDB.database.ref('geofireOr/').remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })   
    }

    deleteGeofireDest(){
        this.afDB.database.ref('geofireDest/').remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })   
    }

    deleteDriverListRide(userId, driverId){
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/' + driverId).remove();
    }
    
    deleteDriverListRideTotal(userId){
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/').remove();
    }

    getLocationPlace(place){
        return this.afDB.object('allPlaces/' + place ).valueChanges();
    }

    

    // set a new node on firebase which is the location of the university
    setLocationPlace(place, key, lat, lng){
    this.dbRef = this.afDB.database.ref(place + '/geofirePlace/' );
    this.geoFire = new GeoFire(this.dbRef); 
      this.geoFire.set(key, [lat, lng]).then(function(){
      console.log('location '+ place + ' updated');
      }, function(error){
      console.log('error: ' + error)
    });
  }

  deleteGeofirePlace(){
      this.afDB.database.ref('geofirePlace/').remove().then(()=>{
          console.log('geofirePlace node has been deleted');
      })
  }            

    }