import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SprintListPage } from '../sprint';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SprintListPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
