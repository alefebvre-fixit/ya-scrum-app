import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SignInPage } from './signin/sign-in';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    SignInPage,
  ],
  exports: [
    SignInPage,
  ],
  providers: [
  ],
  entryComponents: [
    SignInPage
  ],
})

export class UserModule { }

export { SignInPage } from './signin/sign-in';
