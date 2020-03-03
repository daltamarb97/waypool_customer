import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class DriverInstancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public turnOntripUsers(place, user){
    this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public turnOntripUsersFalse(place, user){
    this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
        onTrip: false
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public scheduleTypeManual(place, user){
    this.afDB.database.ref(place + '/drivers/' + user).update({
        scheduleType: 'manual'
    }, (error)=>{
        console.log(error);
        
    })
} 

public scheduleTypePicture(place, user){
    this.afDB.database.ref(place + '/drivers/' + user).update({
        scheduleType: 'picture'
    }, (error)=>{
        console.log(error);
        
    })
} 

public turnOntripUsersListRide(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public stopShowingOnDriver(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
        showDriver: false
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
}  

public noDriversAvailableInstance(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        noUsersMessage: true
    })
}

public noDriversAvailableInstanceDelete(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        noUsersMessage: false
    })
}

public clickedDirectionMessage(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        clickedDirection: true
    })
}

public clickedDirectionMessageCancel(userId){
    this.afDB.database.ref('/drivers/' + userId).update({
        clickedDirection: false
    })
}


public isVerifiedPerson ( userId){
    this.afDB.database.ref('/driversTest/' + userId).update({
        verifiedPerson: true
    })
}

public ToggleStatusOnline (place, userId){
    this.afDB.database.ref(place + '/drivers/' + userId).update({
        toggleStatus: 'online'
    })
    this.afDB.database.ref('allUsers/' + userId).update({
        toggleOnline: place
    })
}

public ToggleStatusOffline ( userId){
    this.afDB.database.ref( '/driversTest/' + userId).update({
        toggleStatus: 'offline'
    })

    this.afDB.database.ref('allUsers/' + userId + '/toggleOnline/').remove();
}

}

