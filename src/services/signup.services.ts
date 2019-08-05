import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class SignUpService {

    userUniversity:any;
    constructor(public afDB: AngularFireDatabase, public toastCtrl: ToastController){

    }

    public saveUser(user, university){
        this.afDB.database.ref(university + '/users/'+ user.userId).update(user);
        this.afDB.database.ref(university + '/drivers/'+ user.userId).update(user);

    }

    public getUniversities(){
       return this.afDB.list('universities/').valueChanges()
    }

    
    public saveDriver(user){
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
    
    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }

     getMyInfo(userId, university){
        return this.afDB.object(university + '/users/'+ userId).valueChanges();
        }

        public getInfoDriver(userDriverId){
            return this.afDB.object('drivers/'+ userDriverId).valueChanges();
            }
    


    public  deleteAccount(university, userId){
        this.afDB.database.ref(university + '/users/'+userId).remove();
        this.afDB.database.ref(university + '/drivers/'+userId).remove();

        } 
public getMyInfoForProfile(university, userId){
            return this.afDB.object(university + '/users/'+ userId).valueChanges();
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

   public saveInfoProfileUrl(university, userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref(university + '/users/'+ userUid).update({
     url:url
     });
 }

 public saveInfoProfileAbout(university, userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref(university + '/users/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfilePhone(university, userUid,phone){
    //permite configurar la información del perfil
 this.afDB.database.ref(university + '/users/'+ userUid).update({
     phone:phone
     });
 }

}