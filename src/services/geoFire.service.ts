import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";

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
    driverOnNodeOr:any;
    driverOnNodeDest:any;
    constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){
       
    }

    setLocationGeofireDest( key, lat, lng, userId){
        this.dbRef = this.afDB.database.ref('geofireDest/' );
        this.geoFire = new GeoFire(this.dbRef); 

        // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
            // this.user = user;
            // if(!this.user.onTrip == true){
                this.geoFire.set(key, [lat, lng]).then(function(){
                    console.log('location updated');
                   }, function(error){
                  console.log('error: ' + error)
                   });

                   this.deleteUserGeofireOr(key)

                   this.afDB.database.ref('users/' + userId).update({
                    geofireDest: true,
                    geofireOr: false
                })
            // }
        // })
           
    }

    // setLocationGeofireOr( key, lat, lng, userId){
    //     this.dbRef = this.afDB.database.ref('geofireOr/' );
    //     this.geoFire = new GeoFire(this.dbRef); 

    //     // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
    //         // this.user = user;
    //         // if(!this.user.onTrip == true){
    //             this.geoFire.set(key, [lat, lng]).then(function(){
    //                 console.log('location updated');
    //                }, function(error){
    //               console.log('error: ' + error)
    //                });

    //         // }
    //         this.afDB.database.ref('users/' + userId).update({
    //             geofireOr: true,
    //             geofireDest: false
    //         })
    //     // })
           
    // }



    setGeofireOr( radius:number, lat, lng, userId):void{ 
  this.dbRef = this.afDB.database.ref('geofireOr/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery2 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  this.keyEnteredOr( userId);
  this.keyExitedOr( userId);

  console.log('geoquery or added');


}

//JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
keyEnteredOr( userId){
    this.geoquery2.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key
     }).then(()=>{
       //get driverId from geofireOr node
        this.getIdFromGeofireOrNode(key).subscribe(driver =>{
             this.driverOnNodeOr = driver;
             this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).update({
                 driverId: this.driverOnNodeOr.driverId
             })
        })  
     })

    //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
    //   userId: userId
  
    // })
         
   }.bind(this))
  }
  
  
  keyExitedOr( userId){
   
   this.geoquery2.on("key_exited", function(key){
     this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }

  getIdFromGeofireOrNode(key){
      return this.afDB.object('/geofireOr/'+ key).valueChanges();
  }


  setGeofireDest( radius:number, lat, lng, userId):void{ 
  this.dbRef = this.afDB.database.ref('geofireDest/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoquery1 = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

  
  this.keyEnteredDest( userId);
  this.keyExitedDest(userId);

console.log('geoquery dest added');
}

keyEnteredDest( userId,  ){
    this.geoquery1.on("key_entered", function(key, location, distance){
     console.log(key);

     this.afDB.list('/geofireDest/'+ key).valueChanges().subscribe((driverOnNode)=>{
        this.driverOnNodeDest = driverOnNode;
    })

       this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).update({
        driverId: this.driverOnNodeDest.driverId,
        keyReserve: key
       })
       console.log('keyentered here');
    
     
     
   }.bind(this))
 }
 
 
 keyExitedDest(userId){
   
   this.geoquery1.on("key_exited", function(key){
     this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).remove()
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
    pushToMyReserve(keyReserve,driverId,userId){
        this.afDB.database.ref('/users/' + userId +'/myReserves/'+ keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId,
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    joinReserve(keyReserve,driverId, userId, origin, destination, name, lastname, phone, note, about, email, fixedemail){
        this.afDB.database.ref('/reserves/' + driverId +'/'+keyReserve+ '/pendingUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             note:note,
             about: about,
             email: email,
             fixedemail: fixedemail
        }).catch((err)=>{
            console.log(err)
        })
    }

    deleteReserveFromAvailableReserves(userId, keyPush){
        this.afDB.database.ref('/users/' + userId +'/availableReserves/' + keyPush).remove();
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

    getLocationUniversity(){
        return this.afDB.object('uninorte/').valueChanges();
    }

    // set a new node on firebase which is the location of the university
setLocationUniversity( key, lat, lng){
    this.dbRef = this.afDB.database.ref('geofireUniversity/' );
    this.geoFire = new GeoFire(this.dbRef); 
      this.geoFire.set(key, [lat, lng]).then(function(){
      console.log('location uninorte updated');
      }, function(error){
      console.log('error: ' + error)
    });
  }

//   // set geoquery that determines if the person is in university
// setGeofireUniversity( radius:number, lat, lng, userId):void{ 
  
//     this.dbRef = this.afDB.database.ref('geofireUniversity/' );
//     this.geoFire = new GeoFire(this.dbRef); 
  
//     this.geoqueryU = this.geoFire.query({
//       center: [lat, lng],
//       radius: radius
//     })
  
//     this.keyEnteredUniversity(userId);
  
//   console.log('geoquery university added');
//   }
  
//   keyEnteredUniversity(userId){
//     this.geoqueryU.on("key_entered", function(key){
//      this.afDB.database.ref('/users/' + userId ).update({
//        geofireOrigin: true
//      }).then(()=>{
//        console.log('geofireOrigin = true');
//      })
//      console.log(key + ' detected')
//    }.bind(this))
  
//   }
  
  cancelGeoqueryUniversity(){
    if(this.geoqueryU){
      this.geoqueryU.cancel()
      console.log('geoqueryU deleted');
  
    }else{
      console.log('dont uni query')
    }
    
  }

  public cancelGeofireOrigin(userId){
    this.afDB.database.ref('/users/' + userId + '/geofireOrigin').remove().then(()=>{
      console.log('geofireOrigin deleted');
    })
  }
            

    }

    
