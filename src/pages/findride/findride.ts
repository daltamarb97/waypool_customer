import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';

import { ListridePage } from '../listride/listride';



import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController } from 'ionic-angular';



 
declare var google;

@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
 
  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  markers: any;
  // autocomplete/geocoder variables
  autocompleteMyPos: any;
  autocompleteMyDest: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  autocompleteItems2:any;
  // waypoints variables
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any;
  waypoints: any[];
  myLatLngDest:any;
  //¿Adonde vas? 
  destinationSelect: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone) {
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2=[];

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.bounds = new google.maps.LatLngBounds();
    
    this.markers = [];
    // initialize the plugin
    this.waypoints = [
      {
        location: { lat: 11.021501699519131, lng: -74.86285872754996 },
        stopover: true,
      },
      {
        location: { lat: 11.025534032595598, lng: -74.86373904478859},
        stopover: true,
      },
      {
        location: { lat: 11.02236576562964, lng: -74.86300545538433 },
        stopover: true,
      },
      {
        location: { lat: 11.026110069053571, lng: -74.8605112367415},
        stopover: true,
      }
    ];
  }
 
  ionViewDidLoad(){
    
    this.loadMap();
  }
 
  loadMap(){

 // this gets current position and set the camera of the map and put a marker in your location
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
          center: latLng,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    //creates the map and give options
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        draggable:true
      });
      this.markers.push(marker);
      
      this.dragMarker(marker,this.autocompleteMyPos)
      //to reverse-geocode position
      this.geocodeLatLng(latLng,this.autocompleteMyPos)
      
       
      },(err) => {
      console.log(err);    
     });
  }
   geocodeLatLng(latLng,inputName) {

    this.geocoder.geocode({'location': latLng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
           console.log(results[0].formatted_address)
           inputName.input=[results[0].formatted_address]
        } else {
         alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
                  

    });
  }  
   calculateRoute(positionDest){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/

    this.bounds.extend(this.myLatLng);

    // this.waypoints.forEach(waypoint => {
    //   var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
    //   this.bounds.extend(point);
    // });
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
      // origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
     origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: positionDest,
      // waypoints: this.waypoints,
      // optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    }, (response, status)=> {
      //render
      if(status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Could not display directions due to: ' + status);
      }
    });  
  }
getPositionAndMarker(){
  this.clearMarkers();//remove previous markers

    // this will allow the user get his position every time he wants 
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.BOUNCE,
        position: latLng,
        
      });
    this.dragMarker(marker,this.autocompleteMyPos)
      },(err) => {
      console.log(err);    
    });
}
//autocomplete of myPosition searchbar
updateSearchResultsMyPos(){
    if (this.autocompleteMyPos.input == '') {
      this.autocompleteItems = [];     
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
    (predictions, status) => {
      this.autocompleteItems = [];
      if(predictions){
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      }
  });
}
  ////autocomplete of my destination
  updateSearchResultsMyDest(){
    if (this.autocompleteMyDest.input == '') {
      this.autocompleteItems2 = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: {country:'co'} },
    (predictions, status) => {
      this.autocompleteItems2 = [];
      if(predictions){


        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems2.push(prediction);
          });
        });
      }
  });
}

  ////select result of my position searchbar
selectSearchResultMyPos(item){
  this.autocompleteItems=[];

  this.clearMarkers();

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){
      
      let position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng
      };
       let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: this.map,
        draggable: true
      });
      this.dragMarker(marker,this.autocompleteMyPos)
      this.markers.push(marker);
      this.map.setCenter(results[0].geometry.location);
      this.autocompleteMyPos.input=[item.description]


    }
  })
  
  
}

  ////select result of my destination searchbar

selectSearchResultMyDest(item){
  this.autocompleteItems2=[];
  

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){

      let position = {
        latitude: results[0].geometry.location.lat,
        longitude: results[0].geometry.location.lng
      };
        // let position = new google.maps.LatLng( results[0].geometry.location.lat,
        //  results[0].geometry.location.lng)
  
  
    

      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: this.map,
        draggable:true,
       
      });
      // this.myLatLngDest = {position: results[0].geometry.location}
      // this.myLatLngDest = {latitude: results[0].geometry.location.lat, longitude: results[0].geometry.location.lng} ;

      this.map.fitBounds(this.bounds);
     
      this.markers.push(marker);
      this.map.setCenter(results[0].geometry.location);
      this.autocompleteMyDest.input=[item.description]
      this.dragMarker(marker,this.autocompleteMyDest)
      this.directionsDisplay.setMap(this.map);
      this.calculateRoute(results[0].geometry.location);
      // google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //   this.mapElement.nativeElement.classList.add('show-map');
      //   this.calculateRoute(results[0].geometry.location);
      // });   
    }
  })
}
////////Markers
clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  
 dragMarker(marker,inputName){
  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latLng = {lat,lng}
    console.log(latLng)
    this.map.setCenter(latLng);
    this.geocodeLatLng(latLng,inputName)
})
}
  listride(){
    // TO DO: IF  (GEOPOSITION !== POSITIONDEST){
//      NO PERMITIR VIAJE , ES UNA IDEA PERO NO ESTOY 100% DE ACUERDO
    //}

    //this is to go to ListridePage  this.navCtrl.push(ListridePage);
     
  }
  

}



// import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';

// import { ListridePage } from '../listride/listride';
// import { Geolocation } from '@ionic-native/geolocation';
// import { NavController, Platform, ViewController } from 'ionic-angular';
// import { Geofence } from '@ionic-native/geofence';

 
// declare var google;

// @Component({
//   selector: 'page-findride',
//   templateUrl: 'findride.html'
// })
// export class FindridePage {

  
//   @ViewChild('map') mapElement: ElementRef;

//   map: any;
//   markers: any;
//   // autocomplete/geocoder variables
//   autocompleteMyPos: any;
//   autocompleteMyDest: any;
//   GoogleAutocomplete: any;
//   GooglePlaces: any;
//   geocoder: any
//   autocompleteItems: any;
//   autocompleteItems2:any;
//   // waypoints variables
//   directionsService: any = null;
//   directionsDisplay: any = null;
//   bounds: any = null;
//   myLatLng: any;
//   waypoints: any[];
//   myLatLngDest:any;
//   constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone,private geofence: Geofence) {
   
  

//     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
//     this.geocoder = new google.maps.Geocoder;

//     this.autocompleteMyPos = { input: '' };
//     this.autocompleteMyDest = { input: '' };

//     this.autocompleteItems = [];
//     this.autocompleteItems2=[];

//     this.directionsService = new google.maps.DirectionsService();
//     this.directionsDisplay = new google.maps.DirectionsRenderer();
//     this.bounds = new google.maps.LatLngBounds();
    
//     this.markers = [];
//     // initialize the plugin
//     this.waypoints = [
//       {
//         location: { lat: 4.6241329, lng: -74.1768411 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6247745, lng: -74.1698888 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6212241, lng: -74.1631081 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6222508, lng: -74.1667989 },
//         stopover: true,
//       }
//     ];
//   }
 
//   ionViewDidLoad(){
//     this.loadMap();
//   }
 
//   loadMap(){

//  // this gets current position and set the camera of the map and put a marker in your location
//     this.geolocation.getCurrentPosition().then((position) => {

//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
//       let mapOptions = {
//           center: latLng,
//           zoom: 18,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
    
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//       this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};

//       let marker = new google.maps.Marker({
//         map: this.map,
//         animation: google.maps.Animation.DROP,
//         position: latLng,
//         draggable:true
//       });
//       this.markers.push(marker);
      
//       this.dragMarker(marker)

      
    
       
//       },(err) => {
//       console.log(err);    
//      });
//   }
    
//    calculateRoute(){
//     //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/

//     this.bounds.extend(this.myLatLng);

//     this.waypoints.forEach(waypoint => {
//       var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
//       this.bounds.extend(point);
//     });
  
//     this.map.fitBounds(this.bounds);
    
//     this.directionsService.route({
//       // origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
//      origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
//       destination: new google.maps.LatLng(this.myLatLngDest.lat, this.myLatLngDest.lng),
//       waypoints: this.waypoints,
//       optimizeWaypoints: true,
//       travelMode: google.maps.TravelMode.DRIVING,
//       avoidTolls: true
//     }, (response, status)=> {
//       //render
//       if(status === google.maps.DirectionsStatus.OK) {
//         console.log(response);
//         this.directionsDisplay.setDirections(response);
//       }else{
//         alert('Could not display directions due to: ' + status);
//       }
//     });  
//   }
// getPositionAndMarker(){
//   this.clearMarkers();//remove previous markers

//     // this will allow the user get his position every time he wants 
//     this.geolocation.getCurrentPosition().then((position) => {

//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//       let mapOptions = {
//           center: latLng,
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
    
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

//       let marker = new google.maps.Marker({
//         map: this.map,
//         animation: google.maps.Animation.BOUNCE,
//         position: latLng,
        
//       });
//     this.dragMarker(marker)
//       },(err) => {
//       console.log(err);    
//     });
// }
// //autocomplete of myPosition searchbar
// updateSearchResultsMyPos(){
//     if (this.autocompleteMyPos.input == '') {
//       this.autocompleteItems = [];     
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems = [];
//       if(predictions){
//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems.push(prediction);
//           });
//         });
//       }
//   });
// }
//   ////autocomplete of my destination
//   updateSearchResultsMyDest(){
//     if (this.autocompleteMyDest.input == '') {
//       this.autocompleteItems2 = [];
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems2 = [];
//       if(predictions){


//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems2.push(prediction);
//           });
//         });
//       }
//   });
// }

//   ////select result of my position searchbar
// selectSearchResultMyPos(item){
//   this.autocompleteItems=[];

//   this.clearMarkers();

//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
      
//       let position = {
//           lat: results[0].geometry.location.lat,
//           lng: results[0].geometry.location.lng
//       };
//        let marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable: true
//       });
//       this.dragMarker(marker)
//       this.markers.push(marker);
//       this.map.setCenter(results[0].geometry.location);
//       this.autocompleteMyPos.input=[item.description]
      

//     }
//   })
  
  
// }

//   ////select result of my destination searchbar

// selectSearchResultMyDest(item){
//   this.autocompleteItems2=[];
  

//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
//       // let position = {latitude: results[0].geometry.location.lat,
//       //   longitude: results[0].geometry.location.lng}
//         let position = new google.maps.LatLng( results[0].geometry.location.lat,
//          results[0].geometry.location.lng)
  
  
    

//       let marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable:true,
       
//       });
//       // this.myLatLngDest = new google.maps.LatLng(results[0].geometry.location.lat , results[0].geometry.location.lng);
//       this.myLatLngDest = {lat: results[0].geometry.location.lat , lng: results[0].geometry.location.lng};

//       this.map.fitBounds(this.bounds);
//       this.dragMarker(marker)
//       this.markers.push(marker);
//       this.map.setCenter(results[0].geometry.location);
//       this.autocompleteMyDest.input=[item.description]

//       this.directionsDisplay.setMap(this.map);
     
//       google.maps.event.addListenerOnce(this.map, 'idle', () => {
//         this.mapElement.nativeElement.classList.add('show-map');
//         this.calculateRoute();
//       });
        
      
       

      
      
      
//     }
//   })
// }
// ////////Markers
// clearMarkers(){
//     for (var i = 0; i < this.markers.length; i++) {
//       console.log(this.markers[i])
//       this.markers[i].setMap(null);
//     }
//     this.markers = [];
//   }
  
//  dragMarker(marker){
//   google.maps.event.addListener(marker, 'dragend', function (evt) {
//     let lat = marker.getPosition().lat()
//     let lng = marker.getPosition().lng()
//     let latLng = {lat,lng}
//     console.log(latLng)
//     this.map.setCenter(latLng);
//  })
// }

 
//   listride(){
//     //this is to go to ListridePage  this.navCtrl.push(ListridePage);
     
//   }
  


