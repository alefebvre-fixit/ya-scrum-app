import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SprintListPage } from './sprint-list';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    SprintListPage,
  ],
  exports: [
    SprintListPage,
  ],
  providers: [
  ],
  entryComponents: [
    SprintListPage
  ],
})

export class SprintModule { }

export { SprintListPage } from './sprint-list';
