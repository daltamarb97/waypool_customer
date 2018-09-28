import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListridePage } from '../listride/listride';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
  map: GoogleMap;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyC7wuQ1MQ6t7tZ8Q-qDkDvy-dRhqE65tOM',
      'API_KEY_FOR_BROWSER_DEBUG':''
    })
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
  
//  listride(){
//     this.navCtrl.push(ListridePage);
//  }
 

// }
