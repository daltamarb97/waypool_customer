import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { clearModulesForTest } from "@angular/core/src/linker/ng_module_factory_loader";

@Injectable()
export class DriverSignUpService {
    
    //gloabl variable for university identifaction
    userPlace:any;
    schedulePush:any;
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

   public getMyInfo(place, userId){
    return this.afDB.object(place + '/drivers/'+userId).valueChanges();
    }
    public getToggleStatus(place, userId){
        return this.afDB.object(place + '/drivers/'+userId+'/toggleStatus/').valueChanges();
        }
    public getMyOriginAndDestination(place, userId){
        return this.afDB.object(place + '/drivers/'+userId+'/trips/').valueChanges();
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

    
    public pushDocsL(place, userId){
       this.afDB.database.ref(place + '/drivers/'+userId+'/documents').update({
           license: false
       })
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
     public emailVerificationMessage(place, user){

        this.afDB.database.ref(place + '/drivers/' + user).update({
            emailVerificationMessage: true
        })
    }

    public getMyInfoDriver(place, userId){
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
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

    
    public getMyInfoForProfile(place, userId){
        return this.afDB.object(place + '/drivers/'+ userId).valueChanges();
        }

        
public saveInfoProfilePhone(place, userUid,phone){
   //permite configurar la información del perfil
this.afDB.database.ref(place + '/drivers/'+ userUid).update({
    phone:phone
    });
}

public saveInfoProfileAbout(place, userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref(place + '/drivers/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfileUrl(place, userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref(place + '/drivers/'+ userUid).update({
     url:url
     });
 }


public deleteAccount(place, userUid){
    this.afDB.database.ref(place + '/drivers/'+userUid).remove();
    this.afDB.database.ref(place + '/users/'+userUid).remove();
}

public addCar(place, DriverUid,carModel,plateNumber,color){
    this.afDB.database.ref(place + '/drivers/'+DriverUid+'/cars/').push({
        carModel:carModel,
        plateNumber:plateNumber,
        color:color
    }).then((snap)=>{
        const key = snap.key;
        this.afDB.database.ref(place + '/drivers/'+ DriverUid + '/cars/' + key).update({
            keyCar: key 
        })

    })
}


public deleteCar(place, driverUid,carKey){
    this.afDB.database.ref(place + '/drivers/'+driverUid +'/cars/'+ carKey).remove();
}
public addCarProfile(place, userUid,car){
    this.afDB.database.ref(place + '/drivers/'+userUid+'/cars/').push(car)
}

public addPlaceZone(place, userUid){
    this.afDB.database.ref(place + '/drivers/'+ userUid).update({place: place});
    this.afDB.database.ref(place + '/users/'+ userUid).update({place: place});

}
 
public getCar(place, userId){
    return this.afDB.list(place + '/drivers/'+ userId+'/cars').valueChanges();

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


 public getSchedule(place, userId){
    return this.afDB.list(place + '/drivers/'+userId+'/schedule/').valueChanges();

}

public removeSchedule(place, userId, key){
     this.afDB.database.ref(place + '/drivers/'+userId+'/schedule/'+ key).remove();
       
}
}