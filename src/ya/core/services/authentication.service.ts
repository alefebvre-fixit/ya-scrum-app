import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Account, User } from '../models';

@Injectable()
export class AuthenticationService {
  
  private _account: Account;
  private user: Observable<firebase.User>;

  private $account = new BehaviorSubject<Account>(this._account);

  get $authenticated(): Observable<Account> {
    return this.$account;
  }


  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.extractAccount();
  }

  get account(): Account {
    return this._account;
  }

  set account(account: Account) {
    console.log('calling set account with account ' + account)
    localStorage.setItem('ya-scrum:account', JSON.stringify(account));
    this._account = account;
    this.$account.next(account);
  }

  private extractAccount() {
    const serializedAccount = localStorage.getItem('ya-scrum:account');
    if (serializedAccount) {
      this._account = JSON.parse(serializedAccount);
    }
  }

  public storeAccount(account: Account): Observable<Account> {
    console.log('calling storeAccount with account ' + account)
    
    return Observable.create(observer => {
      this.account = account;

      observer.next(account);
      observer.complete();
    });
  }

  public baseUrl(ressource: string): string {
    return 'groups/' + this.account.group.id + '/' + ressource;
  }


}
