import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangesService } from '../changes.service';
import { ToastrService } from 'ngx-toastr';
import { Change } from '../change';

@Component({
  selector: 'app-changes-create',
  templateUrl: './changes-create.component.html',
  styleUrls: ['./changes-create.component.css']
})
export class ChangesCreateComponent implements OnInit {

  constructor(private changeService: ChangesService,
    private toastrService: ToastrService, ) { }

  change: Change;

  /**
     * The output which tells the parent component
     * that the user no longer wants to create an change
     */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new change
  */
  @Output() create = new EventEmitter();

  /**
   * Creates a new change
   */
  createChange(): Change {
    this.changeService.createChange(this.change)
      .subscribe((change) => {
        this.change = change;
        this.create.emit(); //this.create.emit(); //No se si es con () o sin ()
        this.toastrService.success("The user was created", "Change creation");
      }, err => {
        this.toastrService.error(err, "Error");
      });
    return this.change;
  }

  /**
     * Informs the parent component that the user no longer wants to create an editorial
     */
  cancelCreation(): void {
    this.cancel.emit(); //this.cancel.emit(); //No se si es con () o sin ()
  }
  ngOnInit() {
    this.change = new Change();
  }

}
