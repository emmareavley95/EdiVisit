import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { TransportPage } from '../transport/transport';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = TransportPage;

  constructor() {
  	this.tab1Root = HomePage;
  	this.tab2Root = AboutPage;
  	this.tab3Root = TransportPage;
  }
}
