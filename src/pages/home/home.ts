import { Component, ViewChild, ElementRef } from '@angular/core';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('pleaseConnect') pleaseConnect: ElementRef;

	constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {
		
		platform.ready().then(() => {

			Geolocation.getCurrentPosition().then((position) => {
            	console.log('My latitude: ', position.coords.latitude);
            	console.log('My longitude: ', position.coords.longitude);
        	});
        });

	}

	ionViewDidLoad(){

		this.platform.ready().then(() => {
 
        	let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
            let locationsLoaded = this.locations.load();
 
            Promise.all([
                mapLoaded,
                locationsLoaded
            ]).then((result) => {
 
                let locations = result[1];
 
                for(let location of locations){
                    this.maps.addMarker(location.latitude, location.longitude);
                }
 
            });
 
    	});

	}

}
