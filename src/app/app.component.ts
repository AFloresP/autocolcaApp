import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Galeria',
      url: '/home',
      icon: 'images'
    },
    {
      title: 'Festividades',
      url: '/festivities',
      icon: 'calendar'
    },
    {
      title: 'Restaurantes',
      url: '/restaurants',
      icon: 'restaurant'
    },
    {
      title: 'Hoteles',
      url: '/hotels',
      icon: 'flag'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
