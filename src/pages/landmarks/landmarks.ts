import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Locations } from '../../providers/locations';

@Component({
  selector: 'page-landmarks',
  templateUrl: 'landmarks.html'
})
export class LandmarksPage {

  constructor(public navCtrl: NavController, public locations: Locations) {}

  ionViewDidLoad() {
    console.log('Here are the main landmarks of T2 inEdinburgh');
  }

}
