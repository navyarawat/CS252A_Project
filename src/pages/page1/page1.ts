import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  LatLng,
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})

export class Page1Page {
  @ViewChild('map') mapElement: ElementRef;
  public map: GoogleMap;
  public location: LatLng;

  latr: number;
  langr: number;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public  geolocation: Geolocation, public googleMaps: GoogleMaps) {
  this.latr = 0; this.langr = 0;
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
    this.loadLatLong();
  }
    loadLatLong() {
    this.geolocation.getCurrentPosition({timeout:20000, enableHighAccuracy: true}).then((resp) => {
    this.latr = resp.coords.latitude;
    this.langr = resp.coords.longitude;
    this.location = new LatLng(this.latr, this.langr);
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.latr,
           lng: this.langr
         },
         zoom: 100,
         tilt: 30
       }
       };
    this.platform.ready().then(() => {
       console.log("oh");
        let element = this.mapElement.nativeElement;
        this.map = GoogleMaps.create(element);
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
          console.log("READY");
        let options = {
          target: this.location,
          zoom: 8
        };
      this.map.moveCamera(options);
    });
     });

    
    }).catch((error) => {
        console.log('Error getting location', error);
    });
    }


}





