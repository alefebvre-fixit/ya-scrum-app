import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Sprint } from '../../ya/core/models';
import { SprintService } from '../../ya/core/services';

@Component({
  selector: 'sprint-list',
  templateUrl: 'sprint-list.html'
})
export class SprintListPage {

  public sprintsProgress: Sprint[];
  public sprintsPending: Sprint[];
  public sprintsClosed: Sprint[];

  public status = 'progress';

  constructor(public navCtrl: NavController, public sprintService: SprintService,
  ) {
  }

  ngOnInit(): void {

    this.sprintService.findByStatus('pending').subscribe((sprints: Sprint[]) => {
      this.sprintsPending = sprints;
    });

    this.sprintService.findByStatus('progress').subscribe((sprints: Sprint[]) => {
      this.sprintsProgress = sprints;
    });

    this.sprintService.findByStatus('closed').subscribe((sprints: Sprint[]) => {
      this.sprintsClosed = sprints;
    });

  }

}
