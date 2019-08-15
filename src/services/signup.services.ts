import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class SignUpService {

    constructor(public afDB: AngularFireDatabase, public toastCtrl: ToastController){

    }

    public saveUser(user){
        this.afDB.database.ref('users/'+ user.userId).update(user);
        this.afDB.database.ref('drivers/'+ user.userId).update(user);

    }

    
    public saveDriver(user){
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
    

     //PENDING UNIVERSITY VARIABLE
     public pushDocsCarne(userId){
        this.afDB.database.ref('drivers/'+userId+'/documents').update({
            carne: false
        })

        this.afDB.database.ref('users/'+userId+'/documents').update({
            carne: false
        })
     }


     //DELETE THIS FUNCTION AFTER MERGE/PC READY
     public getUniversities(university){
         return this.afDB.object('/universities/' + university).valueChanges();
     }


    public pushDocsId(userId){
        this.afDB.database.ref('drivers/'+userId+'/documents').update({
            id: false
        })

        this.afDB.database.ref('users/'+userId+'/documents').update({
            id: false
        })
     }



    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }

     getMyInfo(userId){
        return this.afDB.object('users/'+ userId).valueChanges();
        }

        public getInfoDriver(userDriverId){
            return this.afDB.object('drivers/'+ userDriverId).valueChanges();
            }
    


    public  deleteAccount(userId){
        this.afDB.database.ref('/users/'+userId).remove();
        this.afDB.database.ref('/drivers/'+userId).remove();

        } 
public getMyInfoForProfile(userId){
            return this.afDB.object('users/'+ userId).valueChanges();
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

   public saveInfoProfileUrl(userUid,url){
    //permite configurar la información del perfil
 this.afDB.database.ref('/users/'+ userUid).update({
     url:url
     });
 }

 public saveInfoProfileAbout(userUid,about){
    //permite configurar la información del perfil
 this.afDB.database.ref('/users/'+ userUid).update({
     about:about 
     });
 }

 public saveInfoProfilePhone(userUid,phone){
    //permite configurar la información del perfil
 this.afDB.database.ref('/users/'+ userUid).update({
     phone:phone
     });
 }

}