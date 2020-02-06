import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import { elementClass } from "@angular/core/src/render3/instructions";

@Injectable()
export class DriverTripsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }
      public getTrip(place, keyTrip,driverUid){
              //get trip in Trip's node
              return  this.afDB.object(place + '/trips/'+driverUid+'/'+ keyTrip).valueChanges();
          } 
      public getPendingUsers(place, keyTrip,driverUid){
            //get trip in Trip's node
            return  this.afDB.list(place + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
        } 
        getKeyTrip(place, driverUid){
          //get key of driver's trip
          return  this.afDB.object(place + '/drivers/'+driverUid+'/keyTrip').valueChanges();
      }
       
     public getOnTrip(place, userUid){
      return  this.afDB.object(place + '/drivers/'+ userUid+'/onTrip').valueChanges();

     }
     
        public getSpecificUser(place, keyTrip,driverUid,userId){
          //get trip in Trip's node
          return  this.afDB.list(place + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+userId).valueChanges();
      } 
        public getReserveUsers(place , keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(place + '/reserves/'+driverUid+'/'+ keyTrip+'/pendingUsers').valueChanges();
      } 
      public getLastMinuteUsers(place, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(place + '/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers').valueChanges();
      } 
      public getPickedUpUsers(place, keyTrip,driverUid){
          //get trip in Trip's node
          return  this.afDB.list(place + '/trips/'+driverUid+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
      } 
      public startTripForUsers(place, keyTrip,userId,driverId){
        //create a trip in Trip's node in database     
      this.afDB.database.ref(place + '/users/'+userId).update({        
        onTrip:true        
      });
      this.afDB.database.ref(place + '/users/'+userId+'/keyTrip').update({        
        keyTrip:keyTrip,
        driverId:driverId        
      });
    }
       public startTrip(place, keyTrip,driverUid,trip){
        //create a trip in Trip's node in database
     
         this.afDB.database.ref(place+ '/trips/'+driverUid+'/'+ keyTrip).update(trip);
        
   
       }  
       public cancelTrip(place, keyTrip,driverUid,trip){
                //create a trip in Trip's node in database
               
              this.afDB.database.ref(place+ '/trips/'+driverUid+'/'+ keyTrip).update(trip);
             
             
          }  

       public acceptLastMinute(place, driverUid,keyTrip,user){
        this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip+'/pendingUsers/'+ user.userId).update(user);

       }        
       public noRepeatLMU(place, driverUid,keyTrip,userId){
        this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip+'/lastMinuteUsers/'+ userId).update({
          noRepeat:true
        });

       } 
      public eliminateLastMinuteUser(place, driverUid,keyTrip,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip +'/lastMinuteUsers/'+ userId).remove();
      }

          public deleteReserve(place, keyTrip,driverUid){
            this.afDB.database.ref(place + '/reserves/'+driverUid+'/'+ keyTrip).remove();

          }


          public deleteAllReserves(place,driverUid){
            this.afDB.database.ref(place + '/reserves/'+driverUid).remove();

          }


          public notifyLMUitsBeenRejected(place,userId){
            this.afDB.database.ref(place + '/users/'+userId ).update({
              cancelModalLMU: true
            }).then(()=>{
              console.log('se notifico');
              
            })

          }



          


        public pushKeyInDriver(place, keyTrip,DriverUid){
          //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref(place + '/drivers/'+ DriverUid).update({
          keyTrip:keyTrip
        });

    }  
    public pushOnTripInDriver(place, DriverUid){
      //push a onTrip in Driver's node
    this.afDB.database.ref(place+ '/drivers/'+ DriverUid).update({
      onTrip:true
    });
  }
      public eliminatePendingUsers(place, keyTrip,driverUid,userId){  

          //eliminate the user from pendingUsers
            this.afDB.database.ref(place+ '/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+ userId).remove();
      }


      public pickUp(place, keyTrip,driverUid,userId,user){
        // add the driver to pickedUpUsers 
        this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip +'/pickedUpUsers/'+ userId).update(user);
     }

     public addSavedKMGlobal(place, savedKM){
      this.afDB.database.ref('/data/allTrips'+place ).update({
        savedKM:savedKM
      });
     }

     

     public addSavedKMGlobalPassengers(place, savedKM){
      this.afDB.database.ref('/data/kmsSavedByPassengers/'+ place).update({
        savedKM:savedKM
      });
     }



     public createTripState(place, keyTrip,driverUid){
      this.afDB.database.ref(place + '/tripsState/'+driverUid+'/'+ keyTrip).update({
        saveTrip:false,
        canceledTrip:false        
      });
     }
     
    
     public eliminateTripState(place,keyTrip,driverUid){
      this.afDB.database.ref(place + '/tripsState/'+driverUid+'/'+ keyTrip).remove();
     }

     public timeFinishedTrip(place, keyTrip,driverUid,date){
      //set time when driver go to destination 

          this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip).update({
            DestinationTime:date
          });
          }

          public endTrip(place, keyTrip,driverUid){          
             //erase trip in trip's node
            this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip).remove();
        }
        public setOnTripFalse(place, driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(place + '/drivers/'+driverUid).update({
            onTrip:false
          });  
        }
        public setOnTripFalseUser(place, userId){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(place + '/users/'+userId).update({
            onTrip:false
          });  
        }
        public eliminateKeyTripUser(place, userId){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(place + '/users/'+userId+'/keyTrip').remove();  

        }
        public eliminateKeyUser(place, userId,reserveId){    
          //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place +'/users/'+userId+'/myReserves/'+ reserveId).remove();
       }
  
        public saveTripOnRecordsUser(place, userUid, trip, keyTrip){
          //save trip in recordTrips
          
        this.afDB.database.ref(place + '/users/'+userUid+'/recordTrips/' + keyTrip).update(trip);
   
       }

       public cancelUserFromReserve(place, driverUid,keyTrip,userId){ 
    
        this.afDB.database.ref(place +'/users/'+userId+'/cancelReserve/').update({
          cancelReserve:true,
          driverId:driverUid,
          keyTrip:keyTrip
        }); 
      }
        public setOnTrip(place, driverUid){           
          // set false to onTrip instance in driver's node
          this.afDB.database.ref(place + '/drivers/'+driverUid).update({
            onTrip:true
          });  
        }
        
        public endTripForUsers(place,userId){          
          this.afDB.database.ref(place + '/users/'+userId+'/').update({
            saveTrip:true
          });  
          
        
     }
     public sentTripUser(place,userId,trip){          
      this.afDB.database.ref(place + '/users/'+userId+'/trip').update(trip);  
      
    
 }
       public saveTripUser(place, driverUid,keyTrip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref(place+ '/tripsState/'+driverUid+'/'+ keyTrip).update({
            saveTrip:true
          });  
        }
        public allTrips(place, driverUid,keyTrip,trip){           
          // this instance allows the user to save the trip in his records
          this.afDB.database.ref('data/allTrips/'+place+'/'+driverUid+'/'+ keyTrip).update(trip);  
        }
       public getTripState(place, reserveId,driverId){
          return  this.afDB.object(place + '/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();
      
        }
       
       public eraseKeyTrip(place, driverUid){           
          // erase keyTrip in driver's node
          this.afDB.database.ref(place + '/drivers/' + driverUid +'/keyTrip').remove();
        }
       public cancelUserFromTrip(place, driverUid,keyTrip,userId){ 
    
            this.afDB.database.ref(place +'/users/'+userId+'/').update({
              cancelTrip:true
            });       
         
          //eliminate the user from pendingUsers
          this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip +'/pendingUsers/'+userId).remove();  
          
        }
        public saveTripOnRecords(place, driverUid,trip, keyTrip){
          //save trip in recordTrips
          
        this.afDB.database.ref(place + '/drivers/'+driverUid+'/recordTrips/' + keyTrip).update(trip);
   
       }


       public sendPaymentInfoOfTrip(place, driverId, amount){
          this.afDB.database.ref(place + '/drivers/' + driverId ).update({
            pendingToReceive: amount
          })
       }


       public sendPaymentInfoOfTripForUser(place, userId, amount){
        this.afDB.database.ref(place + '/users/' + userId ).update({
          pendingToPay: amount
        })
     }


     public reduceNumberPersonalFreeRides(place, userId, remainingRides){
      this.afDB.database.ref(place + '/users/' + userId ).update({
        personalFreeRides: remainingRides
      })
   }


   public reduceNumberCompanyFreeRides(city, userCompany, remainingRides){
    this.afDB.database.ref('allCities/' + city +  '/allPlaces/' + userCompany ).update({
      freeRidesNumber: remainingRides
    })
 }


  



       public cancelReserve(place, driverUid,keyTrip){
        this.afDB.database.ref(place + '/reserves/'+driverUid+'/'+ keyTrip).remove();  
        console.log("hola")
       }
  
 }

     



    

