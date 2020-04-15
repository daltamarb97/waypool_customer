import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage, NavParams  } from 'ionic-angular';
import { GroupsService } from '../../services/groups.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject, Subscription } from 'rxjs';


@IonicPage()

@Component({
  selector: 'page-groupdetail',
  templateUrl: 'groupdetail.html'
})
export class GroupDetailPage {
crew:any;
crewNavParams:any;
unsubscribe = new Subject;
subscribe:Subscription;
disable:any = false;
userUid=this.AngularFireAuth.auth.currentUser.uid;
members:any = [];
imageUrl:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams,public GroupsService:GroupsService, private AngularFireAuth: AngularFireAuth) {
    this.crew= this.navParams.get('crew'); 
      this.GroupsService.getSpecificCrew( this.userUid,this.crew).takeUntil(this.unsubscribe)
      .subscribe( crew => {
			this.crew = crew;			
      if(this.crew.transport === undefined || this.crew.transport === null){

      } else if (this.crew.transport == 'taxi') {
        this.imageUrl = 'assets/imgs/carOrange.png'
      } else if (this.crew.transport == 'otherCar') {
        this.imageUrl = 'assets/imgs/carfuture.png'

      }
    })	
        this.GroupsService.getMembersCrew( this.userUid,this.crew).takeUntil(this.unsubscribe)
        .subscribe( members => {
            this.members = members;			
            console.log(this.members);
            if(this.members === undefined || this.members.length === 0){
              // disable button because there is no one in the trip
              this.disable = true;
                console.log("estoy disable");              
            }else{
              this.disable = false;
              console.log("no estoy disable");

            }
    })	

  }
  seeMembers(crew){
    this.navCtrl.push('MembersGroupPage',{members:this.members,crew:crew});

  }
//  confirmpopup(){
//     let modal = this.modalCtrl.create(ConfirmpopupPage);
//     modal.present();
//  }
changeTransportation(crew){
  let modal = this.modalCtrl.create('ChangeCarPage',{crew:crew});
          modal.onDidDismiss(accepted => {
            if(accepted){

            }
          })
          modal.present();
}
  searchFindDrivers(){
    this.navCtrl.push('MembersGroupPage');

  }
  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }
}