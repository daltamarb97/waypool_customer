import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { clearModulesForTest } from "@angular/core/src/linker/ng_module_factory_loader";

@Injectable()
export class DriverSignUpService {
    
    //gloabl variable for university identifaction
    
    schedulePush:any;
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

   public getMyInfo(userId){
    return this.afDB.object('/usersTest/'+userId).valueChanges();
    }


    // public getInfoAboutMyPlace( userId){
    //     return this.afDB.object('/allUsers/' + userId).valueChanges();
    //     }

    public getInfoPlace(place){
        return this.afDB.object('/allPlaces/' + place).valueChanges()
     }

     public getAllPlaces(){
        return this.afDB.list('allPlaces/').valueChanges()
     }

     public getAllCities(){
        return this.afDB.list('allCities/').valueChanges()
     }

     public getEmails(enterprise){
        return this.afDB.list('allPlaces/' + enterprise +'/emails' ).valueChanges()
     }

     public pushEmails(enterprise, email){
         this.afDB.database.ref('allPlaces/' + enterprise + '/emails').push({
            email:email
         })
     }

    
    // public pushDocsC(place, userId){
    //    this.afDB.database.ref(place + '/drivers/'+userId+'/documents').update({
    //        license: false
    //    })
    // }


    public pushDocsCarne(userId){
        this.afDB.database.ref('/drivers/'+userId+'/documents').update({
            carne: false
        })
        this.afDB.database.ref('/users/'+userId+'/documents').update({
            carne: false
        })
     }



    public pushDocsId( userId){
        this.afDB.database.ref( '/drivers/'+userId+'/documents').update({
            idVerification: false
        })
        this.afDB.database.ref( '/users/'+userId+'/documents').update({
            idVerification: false
        })
     }
     public emailVerificationMessage(place, user){

        this.afDB.database.ref(place + '/drivers/' + user).update({
            emailVerificationMessage: true
        })
    }

    public getMyInfoDriver( userId){
        return this.afDB.object( '/driversTest/' + userId).valueChanges();
    }
    public getInfoUser(place, userId){
        return this.afDB.object(place+ '/users/' + userId).valueChanges();
    }
    
    public async saveUser(place, user){
        this.afDB.database.ref(place + '/drivers/'+ user.userId).update(user);
        this.afDB.database.ref(place + '/users/'+ user.userId).update(user);

    }

    public saveUserInAllUsers(place, user, city){
        this.afDB.database.ref('/allUsers/'+ user).update({
            place: place, 
            city: city
        });
        

    }

    setFixedLocationCoordinates(place, user, lat, lng){
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng:lng,
        })

        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng:lng,
        })
    }

    setFixedLocationName(place, user, name){
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation').update({
            name: name
        })

        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation').update({
            name: name
        })
    }

    
    public getMyInfoForProfile( userId){
        return this.afDB.object('/driversTest/'+ userId).valueChanges();
        }

        
public saveInfoProfilePhone( userUid,phone){
   //permite configurar la información del perfil
this.afDB.database.ref('/driversTest/'+ userUid).update({
    phone:phone
    });
}

public saveInfoProfileAbout( userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref( '/driversTest/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfileUrl( userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref( '/driversTest/'+ userUid).update({
     url:url
     });
 }


public deleteAccount(userUid){
    this.afDB.database.ref('/driversTest/'+userUid).remove();
    this.afDB.database.ref('/usersTest/'+userUid).remove();
}

public addCar( DriverUid,carModel,plateNumber,color){
    this.afDB.database.ref('/driversTest/'+DriverUid+'/cars/').push({
        carModel:carModel,
        plateNumber:plateNumber,
        color:color
    }).then((snap)=>{
        const key = snap.key;
        this.afDB.database.ref( '/driversTest/'+ DriverUid + '/cars/' + key).update({
            keyCar: key 
        })

    })
}


public deleteCar( driverUid,carKey){
    this.afDB.database.ref( '/driversTest/'+driverUid +'/cars/'+ carKey).remove();
}


public addCarProfile(place, userUid,car){
    this.afDB.database.ref(place + '/drivers/'+userUid+'/cars/').push(car)
}

public addPlaceZone(place, userUid){
    this.afDB.database.ref(place + '/drivers/'+ userUid).update({place: place});
    this.afDB.database.ref(place + '/users/'+ userUid).update({place: place});

}
 
public getCar( userId){
    return this.afDB.list('/driversTest/'+ userId+'/cars').valueChanges();

}


public pushSchedule(place, userId, hour, type, description, image){
    this.schedulePush = this.afDB.database.ref(place + '/drivers/'+userId+'/schedule/').push({
        hour: hour, 
        type: type,
        description: description,
        image: image
    }).then((snap)=>{
        this.schedulePush = this.schedulePush = this.afDB.database.ref(place + '/drivers/'+userId+'/schedule/'+ snap.key).update({
            key: snap.key
        })
    })
 }


 public getSchedule( userId){
    return this.afDB.list( '/driversTest/'+userId+'/schedule/').valueChanges();

}

public removeSchedule(place, userId, key){
     this.afDB.database.ref(place + '/drivers/'+userId+'/schedule/'+ key).remove();
       
}
}