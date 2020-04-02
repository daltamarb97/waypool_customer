import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class DriverInstancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public turnOntripUsers( user){
    this.afDB.database.ref(  '/usersTest/' + user + '/tripsTest/').update({
        onTrip: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public turnOntripUsersFalse( user){
    this.afDB.database.ref(  '/usersTest/' + user + '/tripsTest/').update({
        onTrip: false
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
} 

public scheduleTypeManual( user){
    this.afDB.database.ref( '/driversTest/' + user).update({
        scheduleType: 'manual'
    }, (error)=>{
        console.log(error);
        
    })
} 

public scheduleTypePicture(user){
    this.afDB.database.ref( '/driversTest/' + user).update({
        scheduleType: 'picture'
    }, (error)=>{
        console.log(error);
        
    })
} 

public turnOntripUsersListRide(driverId, user){
    this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + user).update({
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
    this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + user).update({
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
    this.afDB.database.ref('/driversTest/' + userId).update({
        noUsersMessage: true
    })
}

public noDriversAvailableInstanceDelete(userId){
    this.afDB.database.ref('/driversTest/' + userId).update({
        noUsersMessage: false
    })
}

public clickedDirectionMessage(userId){
    this.afDB.database.ref('/driversTest/' + userId).update({
        clickedDirection: true
    })
}

public clickedDirectionMessageCancel(userId){
    this.afDB.database.ref('/driversTest/' + userId).update({
        clickedDirection: false
    })
}


public isVerifiedPerson ( userId){
    this.afDB.database.ref('/driversTest/' + userId).update({
        verifiedPerson: true
    })
}

public ToggleStatusOnline ( userId){
    this.afDB.database.ref(  '/driversTest/' + userId).update({
        toggleStatus: 'online'
    })

}

public ToggleStatusOffline ( userId){
    this.afDB.database.ref( '/driversTest/' + userId).update({
        toggleStatus: 'offline'
    })

    this.afDB.database.ref('allUsers/' + userId + '/toggleOnline/').remove();
}

}

