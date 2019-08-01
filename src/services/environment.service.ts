import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class environmentService {

    public currentEnv:any;

    constructor(){

    }

     appInitialization(configData){
        firebase.initializeApp(configData);
        
      }


    //   unilibreInit(config){
    //   const unilibre = firebase.initializeApp(config,"secondary");
    //   return unilibre
    // }
}