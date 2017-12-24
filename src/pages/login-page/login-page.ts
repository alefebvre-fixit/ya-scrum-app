import { UserService } from '../../ya/core/services/user.service';
import { SignIn } from '../../ya/core/models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  
  credentials: SignIn = {
  	  email: '',
  	  password: ''
  };

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private authService: UserService, 
  ) {
  
  }

  login() {
    console.log('Calling Login')
    this.authService.emailSignIn(this.credentials).subscribe();
  }

  signup(){
    //this.authService.register(this.credentials);
  }
}
