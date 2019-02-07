import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class noteService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }

    

   
    public setNote(user,note){
        
      firebase.database().ref('users/' + user+'/trips').update({
         note:note 
        
      })
     }

     



    

}