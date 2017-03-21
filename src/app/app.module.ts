import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandmarksPage } from '../pages/landmarks/landmarks';
import { HomePage } from '../pages/home/home';
import { TransportPage } from '../pages/transport/transport';
import { TabsPage } from '../pages/tabs/tabs';
import { Locations } from '../providers/locations';
import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/google-maps';

@NgModule({
  declarations: [
    MyApp,
    LandmarksPage,
    TransportPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandmarksPage,
    TransportPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Locations, Connectivity, GoogleMaps]
})
export class AppModule {}
