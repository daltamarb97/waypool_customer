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


    setGeofireOr(university, radius:number, lat, lng, userId ):void{ 
  this.dbRef = this.afDB.database.ref(university + '/geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery2 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })
 
    this.keyEnteredOr( userId, university );
    this.keyExitedOr( userId, university );
  
  

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
keyEnteredOr( userId, university ){
    this.keyenteredOr = this.geoquery2.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key
     }).then(()=>{
       //get driverId from geofireOr node
       
        return this.afDB.database.ref(university + '/geofireOr/'+ key).once('value').then((snap) => {
            this.driverOnNodeOr = snap.val();

            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeOr.driverId
    
            })  
        })

     })


         
   }.bind(this))
  }


  
  keyExitedOr( userId, university ){
   
   this.keyexitedOr = this.geoquery2.on("key_exited", function(key){
     this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }




  setGeofireDest(university, radius:number, lat, lng, userId):void{ 
  this.dbRef = this.afDB.database.ref(university + '/geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery1 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  
  this.keyEnteredDest( userId, university);
  this.keyExitedDest(userId, university);

console.log('geoquery dest added');
}

cancelGeofireDest(){
    if(this.geoquery1){
        this.geoquery1.cancel();
    }else{
        console.log('no hay geoqueryDest')
    }
}

keyEnteredDest( userId, university ){
    this.geoquery1.on("key_entered", function(key, location, distance){
     console.log(key);

     this.afDB.list(university + '/geofireDest/'+ key).valueChanges().subscribe((driverOnNode)=>{
        this.driverOnNodeDest = driverOnNode;
    })

       this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
        keyReserve: key
       }).then(()=> {
           return this.afDB.database.ref(university + '/geofireDest/'+ key).once('value').then((snap) => {
            this.driverOnNodeDest = snap.val();

            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeDest.driverId
    
            })  
        })
       })
       console.log('keyentered here');
     
   }.bind(this))
 }
 
 
 keyExitedDest(userId, university){
   
   this.geoquery1.on("key_exited", function(key){
     this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
 }


 setGeofireOrLMU(university, radius:number, lat, lng, userId):void{ 
    this.dbRef = this.afDB.database.ref(university + '/geofireOrTrip/' );
    this.geoFire = new GeoFire(this.dbRef); 
  
    this.geoquery2LMU = this.geoFire.query({
      center: [lat, lng],
      radius: radius
    })
  
    this.keyEnteredOrLMU( userId, university );
    this.keyExitedOrLMU( userId, university );
  
    console.log('geoquery or added');
  
  
  }

  cancelGeofireOrLMU(){
    if(this.geoquery2LMU){
        this.geoquery2LMU.cancel();
    }else{
        console.log('no hay geoqueryOr LMU')
    }
}




  keyEnteredOrLMU( userId, university ){
    this.geoquery2LMU.on( "key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key,
      LMU: true
     }).then(()=>{
       //get driverId from geofireOr node
        return this.afDB.database.ref(university + '/geofireOrTrip/'+ key).once('value').then((snap) => {
            this.driverOnNodeOr = snap.val();

            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                driverId: this.driverOnNodeOr.driverId
    
            })  
        })
     })

    //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
    //   userId: userId
  
    // })
         
   }.bind(this))
  }
  
  
  keyExitedOrLMU( userId, university ){
   
   this.geoquery2LMU.on("key_exited", function(key){
     this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }



  setGeofireDestLMU(university, radius:number, lat, lng, userId):void{ 
    this.dbRef = this.afDB.database.ref(university + '/geofireDestTrip/' );
    this.geoFire = new GeoFire(this.dbRef); 
  
    this.geoquery1LMU = this.geoFire.query({
      center: [lat, lng],
      radius: radius
    })
  
    this.keyEnteredDestLMU( userId, university);
    this.keyExitedDestLMU( userId, university);
  
    console.log('geoquery or added');
  
  
  }

  cancelGeofireDestLMU(){
    if(this.geoquery1LMU){
    this.geoquery1LMU.cancel();
    }else{
        console.log('no hay geoqueryDestLMU');
    }
}




  keyEnteredDestLMU( userId, university){
    this.geoquery1LMU.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key,
      LMU: true
     }).then(()=>{
       //get driverId from geofireOr node
       return this.afDB.database.ref(university + '/geofireDestTrip/'+ key).once('value').then((snap) => {
        this.driverOnNodeDest = snap.val();

        this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
            driverId: this.driverOnNodeDest.driverId

            })  
        })
     })


         
   }.bind(this))
  }
  
  
  keyExitedDestLMU( userId, university){
   
   this.geoquery1LMU.on("key_exited", function(key){
     this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove()
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
    pushToMyReserve(university, keyReserve,driverId,userId){
        this.afDB.database.ref(university +'/users/' + userId +'/myReserves/'+ keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId            
        });
    }
    saveKey(university, keyReserve,driverId,userId){
        this.afDB.database.ref(university +'/users/' + userId +'/keyTrip/').set({
            keyTrip: keyReserve,
            driverId: driverId            
        });
    }

    joinReserve(university, keyReserve,driverId, userId, origin, destination, name, lastname, phone, note, verifiedPerson){
        this.afDB.database.ref(university + '/reserves/' + driverId +'/'+keyReserve+ '/pendingUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             note:note,
             verifiedPerson: verifiedPerson        
        }).catch((err)=>{
            console.log(err)
        })
    }


    deleteAvailableReserve(university, userId, keyReserve){
        this.afDB.database.ref(university + '/users/'+ userId + '/availableReserves/' + keyReserve).remove()
        .catch((err)=>{
            console.log(err)
        })
    }

    deleteReserveFromAvailableReserves(university, userId, keyPush){
        this.afDB.database.ref(university + '/users/' + userId +'/availableReserves/' + keyPush).remove();
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

    getLocationUniversity(university){
        return this.afDB.object('universities/' + university ).valueChanges();
    }

    // set a new node on firebase which is the location of the university
setLocationUniversity(university, key, lat, lng){
    this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/' );
    this.geoFire = new GeoFire(this.dbRef); 
      this.geoFire.set(key, [lat, lng]).then(function(){
      console.log('location '+ university + ' updated');
      }, function(error){
      console.log('error: ' + error)
    });
  }

  deleteGeofireUniversity(){
      this.afDB.database.ref('geofireUniversity/').remove().then(()=>{
          console.log('geofireUniversity node has been deleted');
      })
  }            

    }