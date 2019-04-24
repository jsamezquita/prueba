import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../user-detail';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
  constructor(
    private userService: UsersService,
    private toastrService: ToastrService
  ) { }

  /**
  * The id of the editorial that the user wants to edit
  * This is passed as a parameter by the parent component
  */
  @Input() user_id: number;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an editorial
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new editorial
  */
  @Output() update = new EventEmitter();

  /**
  * The editorial to edit
  */
  user: UserDetail;

  /**
  * Retrieves the information of the editorial
  */
  getUser(): void {
    this.userService.getUserDetail(this.user_id)
      .subscribe(editorial => {
        this.user = editorial;
      });
  }

  /**
  * Updates the editorial's information
  */
  editUser(): void {
    this.userService.updateEditorial(this.user)
      .subscribe(() => {
        this.update.emit();
        this.toastrService.success("The user's information was updated", "User edition");
      });
  }

  /**
  * Informs the parent component that the user no longer wants to update the editorial
  */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.user = new UserDetail();
    this.getUser();
  }

}
