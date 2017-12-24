import { AuthenticationService } from '../ya/core/services/authentication.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WaitingPage } from '../pages/waiting-page/waiting-page';
import { LoginPage } from '../pages/login-page/login-page';

import { Auth } from '../providers/auth';
import { Account } from '../ya/core/models/account';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  account: Account;
  rootPage: any = WaitingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authService: AuthenticationService) {
    this.account = undefined;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.authService.$authenticated.subscribe(account => {


        this.account = this.account;
        console.log('account=' + this.account);

        if (account) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
      });
    });
  }
}