import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import { elementClass } from "@angular/core/src/render3/instructions";

@Injectable()
export class DriverTripsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }
      public getTrip( keyTrip,driverUid){
              //get trip in Trip's node
              return  this.afDB.object( '/tripsTest/'+driverUid+'/'+ keyTrip).valueChanges();
          } 
      public getPendingUsers( keyTrip,driverUid){
            //get trip in Trip's node
            return  this.afDB.list( '/tripsTest/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
        } 
        getKeyTrip( driverUid){
          //get key of driver's trip
          return  this.afDB.object( '/driversTest/'+driverUid+'/keyTrip').valueChanges();
      }
       
     public getOnTrip( userUid){
      return  this.afDB.object( '/driversTest/'+ userUid+'/onTrip').valueChanges();

     }
     
        public getSpecificUser( keyTrip,driverUid,userId){
          //get trip in Trip's node
          return  this.afDB.list( '/tripsTest/'+driverUid+'/'+ keyTrip+'/pendingTest'+userId).valueChanges();
      } 
        public getReserveUsers( keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list( '/reservesTest/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
      } 
      public getLastMinuteUsers(keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/tripsTest/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers').valueChanges();
      } 
      public getPickedUpUsers( keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list('/tripsTest/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 
      public startTripForUsers(keyTrip,userId,driverId){
        //create a trip in Trip's node in database     
      this.afDB.database.ref( '/usersTest/'+userId).update({        
        onTrip:true        
      });
      this.afDB.database.ref( '/usersTest/'+userId+'/keyTrip').update({        
        keyTrip:keyTrip,
        driverId:driverId        
      });
    }


       public startTrip( keyTrip,driverUid,trip){
        //create a trip in Trip's node in database
     
         this.afDB.database.ref('/tripsTest/'+driverUid+'/'+ keyTrip).update(trip).then(()=>{
           console.log('hPTA OCURRI');
           
         })
        
   
       }  
       public cancelTrip( keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
               
              this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip).update(trip);
             
             
          }  

       public acceptLastMinute( driverUid,keyTrip,user){
        this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip+'/pendingTest'+ user.userId).update(user);

       }        
       public noRepeatLMU( driverUid,keyTrip,userId){
        this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip+'/lastMinuteTest'+ userId).update({
          noRepeat:true
        });

       } 
      public eliminateLastMinuteUser( driverUid,keyTrip,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip +'/lastMinuteTest'+ userId).remove();
      }

          public deleteReserve(keyTrip,driverUid){
            this.afDB.database.ref('/reservesTest/'+driverUid+'/'+ keyTrip).remove();

          }


          public deleteAllReserves(driverUid){
            this.afDB.database.ref('/reservesTest/'+driverUid).remove();

          }


          public notifyLMUitsBeenRejected(userId){
            this.afDB.database.ref( '/usersTest/'+userId ).update({
              cancelModalLMU: true
            }).then(()=>{
              console.log('se notifico');
              
            })

          }



          


        public pushKeyInDriver(keyTrip,DriverUid){
          //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref( '/driversTest/'+ DriverUid).update({
          keyTrip:keyTrip
        });

    }  
    public pushOnTripInDriver( DriverUid){
      //push a onTrip in Driver's node
    this.afDB.database.ref( '/driversTest/'+ DriverUid).update({
      onTrip:true
    });
  }
      public eliminatePendingUsers( keyTrip,driverUid,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+ userId).remove().then(()=>{
              console.log('successfully removed pendingUsers');
              
            }).catch((err)=>{
              console.log('no pude borrar pendingUsers porque: ' + err);
              
            })
      }


      public pickUp( keyTrip,driverUid,userId,user){
        // add the driver to pickedUpUsers 
        this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip +'/pickedUpUsers/'+ userId).update(user);
     }

     public addSavedKMGlobal( company, savedKM){
      this.afDB.database.ref('/data/allTrips/'+ company ).update({
        savedKM:savedKM
      });
     }

     

     public addSavedKMGlobalPassengers(company,  savedKM){
      this.afDB.database.ref('/data/kmsSavedByPassengers/'+ company).update({
        savedKM:savedKM
      });
     }



     public createTripState( keyTrip,driverUid){
      this.afDB.database.ref( '/tripsState/'+driverUid+'/'+ keyTrip).update({
        saveTrip:false,
        canceledTrip:false        
      });
     }
     
    
     public eliminateTripState(keyTrip,driverUid){
      this.afDB.database.ref( '/tripsState/'+driverUid+'/'+ keyTrip).remove();
     }

     public timeFinishedTrip( keyTrip,driverUid,date){
      //set time when driver go to destination 

          this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip).update({
            DestinationTime:date
          });
          }

          public endTrip( keyTrip,driverUid){          
             //erase trip in trip's node
            this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip).remove();
        }
        public setOnTripFalse(driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref('/driversTest/'+driverUid).update({
            onTrip:false
          });  
        }
        public setOnTripFalseUser( userId){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref('/usersTest/'+userId).update({
            onTrip:false
          });  
        }
        public eliminateKeyTripUser( userId){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref( '/usersTest/'+userId+'/keyTrip').remove();  

        }
        public eliminateKeyUser(userId,reserveId){    
          //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/'+userId+'/myReserves/'+ reserveId).remove();
       }
  
        public saveTripOnRecordsUser( userUid, trip, keyTrip){
          //save trip in recordTrips
          
        this.afDB.database.ref( '/usersTest/'+userUid+'/recordTrips/' + keyTrip).update(trip);
   
       }

       public cancelUserFromReserve( driverUid,keyTrip,userId){ 
    
        this.afDB.database.ref('/usersTest/'+userId+'/cancelReserve/').update({
          cancelReserve:true,
          driverId:driverUid,
          keyTrip:keyTrip
        }); 
      }
        public setOnTrip( driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref( '/driversTest/'+driverUid).update({
            onTrip:true
          });  
        }
        
        public endTripForUsers(userId){          
          this.afDB.database.ref( '/usersTest/'+userId+'/').update({
            saveTrip:true
          });  
          
        
     }
     public sentTripUser(userId,trip){          
      this.afDB.database.ref('/usersTest/'+userId+'/trip').update(trip);  
      
    
 }
       public saveTripUser( driverUid,keyTrip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref('/tripsState/'+driverUid+'/'+ keyTrip).update({
            saveTrip:true
          });  
        }
        public allTrips( driverUid,keyTrip,trip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref('data/allallTrips'+driverUid+'/'+ keyTrip).update(trip);  
        }
       public getTripState( reserveId,driverId){
          return  this.afDB.object( '/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();
      
        }
       
       public eraseKeyTrip(driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref( '/driversTest/' + driverUid +'/keyTrip').remove();
        }
       public cancelUserFromTrip( driverUid,keyTrip,userId){ 
  
            this.afDB.database.ref('/usersTest/'+userId+'/').update({
              cancelTrip:true
            });       
         
          //eliminate the user from pendingUsers
          this.afDB.database.ref( '/tripsTest/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+userId).remove();  
          
        }
        public saveTripOnRecords( driverUid,trip, keyTrip){
          //save trip in recordTrips
          
        this.afDB.database.ref('/driversTest/'+driverUid+'/recordTrips/' + keyTrip).update(trip);
   
       }


       public sendPaymentInfoOfTrip( driverId, amount){
          this.afDB.database.ref( '/driversTest/' + driverId ).update({
            pendingToReceive: amount
          })
       }


       public sendPaymentInfoOfTripForUser( userId, amount){
        this.afDB.database.ref( '/usersTest/' + userId ).update({
          pendingToPay: amount
        })
     }


     public reduceNumberPersonalFreeRides( userId, remainingRides){
      this.afDB.database.ref( '/usersTest/' + userId ).update({
        personalFreeRides: remainingRides
      })
   }


   public reduceNumberCompanyFreeRides(city, userCompany, remainingRides){
    this.afDB.database.ref('allCities/' + city +  '/allPlaces/' + userCompany ).update({
      freeRidesNumber: remainingRides
    })
 }


  



       public cancelReserve( driverUid,keyTrip){
        this.afDB.database.ref( '/reservesTest/'+driverUid+'/'+ keyTrip).remove();  
        console.log("hola")
       }
  
 }

     



    

