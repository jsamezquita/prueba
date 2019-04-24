import { Component, OnInit } from '@angular/core';
import { Change } from '../change';
import { ChangesService } from '../changes.service';


@Component({
  selector: 'app-changes-list',
  templateUrl: './changes-list.component.html',
  styleUrls: ['./changes-list.component.css']
})
export class ChangesListComponent implements OnInit {

  changes: Change[];

  constructor(private changeService: ChangesService) { }

  /**
    * Asks the service to update the list of changes
    */
  getChanges(): void {
    this.changeService.getChanges()
      .subscribe(changes => {
        this.changes = changes;
      });
  }

  ngOnInit() {
    this.getChanges();
  }

}
