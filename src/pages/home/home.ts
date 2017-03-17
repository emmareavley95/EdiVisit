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

			Geolocation.getCurrentPosition().then((data) => {
            	console.log('My latitude: ', data.coords.latitude);
            	console.log('My longitude: ', data.coords.longitude);
        	});
        });

	}

	ionViewDidLoad(){
		this.initMap();
	}

	initMap(){
		let latLng = new google.maps.LatLng(55.953056, -3.188889);
		
		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}

}
