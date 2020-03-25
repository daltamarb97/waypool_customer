import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class SignUpService {

    //gloabl variable for place identifaction
    
    constructor(public afDB: AngularFireDatabase, public toastCtrl: ToastController){

    }

    public saveUser(user){
        this.afDB.database.ref('/usersTest/'+ user.userId).update(user);
        this.afDB.database.ref('/driversTest/'+ user.userId).update(user);

    }

    public saveUserTest(user){
        this.afDB.database.ref('/usersTest/'+ user.userId).update(user);
        this.afDB.database.ref('/driversTest/'+ user.userId).update(user);

    }

    

    public getAllCities(){
       return this.afDB.list('allCities/').valueChanges()
    }

    public getInfoPlace(place){
        return this.afDB.object('/allPlaces/' + place).valueChanges()
     }

    
    public saveDriver(user){
        //erase this one, it just for testing
        this.afDB.database.ref('driversTest/'+ user.userId).set(user);
    }
    

     public pushDocsCarne( userId){
        this.afDB.database.ref( '/driversTest/'+userId+'/documents').update({
            carne: false
        })

        this.afDB.database.ref( '/usersTest/'+userId+'/documents').update({
            carne: false
        })
     }


    public pushDocsId( userId){
        this.afDB.database.ref( '/driversTest/'+userId+'/documents').update({
            id: false
        })

        this.afDB.database.ref( '/usersTest/'+userId+'/documents').update({
            id: false
        })
     }



    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }

     public getMyInfo(userId){
        return this.afDB.object('/usersTest/'+ userId).valueChanges();
        }

    public getSaveTrip(userId, place){
            return this.afDB.object( '/usersTest/'+ userId + '/saveTrip/').valueChanges();
            }

        public getEmails(enterprise){
            return this.afDB.list('allPlaces/' + enterprise +'/emails' ).valueChanges()
         }


        public checkMyReserves( userId){
            return this.afDB.list('/usersTest/'+ userId + '/myReserves').valueChanges();
            }


            public saveUserInAllUsers(user, city){
                this.afDB.database.ref('/allusersTest/'+ user).update({
                  
                    city: city
                });
                
        
            }



        public getInfoDriver(userDriverId){
            return this.afDB.object('driversTest/'+ userDriverId).valueChanges();
            }
    


    public  deleteAccount( userId){
        this.afDB.database.ref( '/usersTest/'+userId).remove();
        this.afDB.database.ref( '/driversTest/'+userId).remove();

        } 
public getMyInfoForProfile( userId){
            return this.afDB.object( '/usersTest/'+ userId).valueChanges();
            }


   public saveInfoProfile(userUid,phone, about){
    this.afDB.database.ref('/usersTest/'+ userUid).update({
        phone:phone,
        about: about
        
        }).then(()=>{
            console.log('changed info');
        }).catch((err)=>{
            console.log('this is the error: ' + err);
        })
   }

   public saveInfoProfileUrl( userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref( '/usersTest/'+ userUid).update({
     url:url
     });
 }

 public saveInfoProfileAbout( userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref( '/usersTest/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfilePhone( userUid,phone){
    //permite configurar la información del perfil
 this.afDB.database.ref( '/usersTest/'+ userUid).update({
     phone:phone
     });
 }

 setFixedLocationCoordinates( user, lat, lng){
    this.afDB.database.ref( '/usersTest/' + user + '/fixedLocation/coordinates').update({
        lat: lat,
        lng:lng
    })

    this.afDB.database.ref( '/driversTest/' + user + '/fixedLocation/coordinates').update({
        lat: lat,
        lng:lng
    })
}

setFixedLocationName( user, name){
    this.afDB.database.ref( '/usersTest/' + user + '/fixedLocation').update({
        name: name
    })

    this.afDB.database.ref( '/driversTest/' + user + '/fixedLocation').update({
        name: name
    })
}


    // public addPlaceZone( userUid){
    //     this.afDB.database.ref( '/driversTest/'+ userUid).update({place: place});
    //     this.afDB.database.ref( '/usersTest/'+ userUid).update({place: place});

    // }

}