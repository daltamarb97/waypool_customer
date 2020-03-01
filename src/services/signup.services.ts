import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class SignUpService {

    //gloabl variable for place identifaction
    userPlace:any;
    constructor(public afDB: AngularFireDatabase, public toastCtrl: ToastController){

    }

    public saveUser(user){
        this.afDB.database.ref('/users/'+ user.userId).update(user);
        this.afDB.database.ref('/drivers/'+ user.userId).update(user);

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
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
    

     public pushDocsCarne(place, userId){
        this.afDB.database.ref(place + '/drivers/'+userId+'/documents').update({
            carne: false
        })

        this.afDB.database.ref(place + '/users/'+userId+'/documents').update({
            carne: false
        })
     }


    public pushDocsId(place, userId){
        this.afDB.database.ref(place + '/drivers/'+userId+'/documents').update({
            id: false
        })

        this.afDB.database.ref(place + '/users/'+userId+'/documents').update({
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
            return this.afDB.object(place + '/users/'+ userId + '/saveTrip/').valueChanges();
            }

        public getEmails(enterprise){
            return this.afDB.list('allPlaces/' + enterprise +'/emails' ).valueChanges()
         }


        public checkMyReserves(place, userId){
            return this.afDB.list(place + '/users/'+ userId + '/myReserves').valueChanges();
            }


            public saveUserInAllUsers(user, city){
                this.afDB.database.ref('/allUsers/'+ user).update({
                  
                    city: city
                });
                
        
            }



        public getInfoDriver(userDriverId){
            return this.afDB.object('drivers/'+ userDriverId).valueChanges();
            }
    


    public  deleteAccount(place, userId){
        this.afDB.database.ref(place + '/users/'+userId).remove();
        this.afDB.database.ref(place + '/drivers/'+userId).remove();

        } 
public getMyInfoForProfile(place, userId){
            return this.afDB.object(place + '/users/'+ userId).valueChanges();
            }


   public saveInfoProfile(userUid,phone, about){
    this.afDB.database.ref('/users/'+ userUid).update({
        phone:phone,
        about: about
        
        }).then(()=>{
            console.log('changed info');
        }).catch((err)=>{
            console.log('this is the error: ' + err);
        })
   }

   public saveInfoProfileUrl(place, userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref(place + '/users/'+ userUid).update({
     url:url
     });
 }

 public saveInfoProfileAbout(place, userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref(place + '/users/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfilePhone(place, userUid,phone){
    //permite configurar la información del perfil
 this.afDB.database.ref(place + '/users/'+ userUid).update({
     phone:phone
     });
 }

 setFixedLocationCoordinates(place, user, lat, lng){
    this.afDB.database.ref(place + '/users/' + user + '/fixedLocation/coordinates').update({
        lat: lat,
        lng:lng
    })

    this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation/coordinates').update({
        lat: lat,
        lng:lng
    })
}

setFixedLocationName(place, user, name){
    this.afDB.database.ref(place + '/users/' + user + '/fixedLocation').update({
        name: name
    })

    this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation').update({
        name: name
    })
}


    public addPlaceZone(place, userUid){
        this.afDB.database.ref(place + '/drivers/'+ userUid).update({place: place});
        this.afDB.database.ref(place + '/users/'+ userUid).update({place: place});

    }

}