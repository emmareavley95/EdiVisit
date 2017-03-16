import { Component, OnInit } from '@angular/core';

/*
  Generated class for the Map component.
*/

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapDirective implements OnInit {

  public map;

  constructor() {
    
  }

  ngOnInit() {
    this.map = this.createMap();
  }

  createMap(location = new google.maps.LatLng(55.953056, -3.188889)) {
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);

    return map;
  }

}
