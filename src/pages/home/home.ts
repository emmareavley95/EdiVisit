import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement;
	map: any;

	constructor(public navCtrl: NavController, platform: Platform) {
		
		platform.ready().then(() => {

			Geolocation.getCurrentPosition().then((location) => {
            	console.log('My latitude: ', location.coords.latitude);
            	console.log('My longitude: ', location.coords.longitude);
        	});
        });

	}

	ionViewDidLoad(){
		this.initMap();
	}

	initMap(){

		let options = {timeout: 10000, enableHighAccuracy: true};

		Geolocation.getCurrentPosition(options).then((location) => {
			let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

		});

	}

}
