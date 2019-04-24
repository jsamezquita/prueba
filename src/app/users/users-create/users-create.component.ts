import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(
    private userService: UsersService,
    private toastrService: ToastrService,
    private _formBuilder: FormBuilder
  ) { }
 

  /**
  * The new user
  */
  user: User;

  /**
     * The output which tells the parent component
     * that the user no longer wants to create an user
     */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new user
  */
  @Output() create = new EventEmitter();

  /**
   * Creates a new user
   */
  createUser(): User {
    this.userService.createUser(this.user)
      .subscribe((user) => {
        this.user = user;
        this.create.emit(); //this.create.emit(); //No se si es con () o sin ()
        this.toastrService.success("The user was created", "User creation");
      }, err => {
        this.toastrService.error(err, "Error");
      });
    return this.user;


  }


  /**
     * Informs the parent component that the user no longer wants to create an editorial
     */
  cancelCreation(): void {
    this.cancel.emit(); //this.cancel.emit(); //No se si es con () o sin ()
  }

  ngOnInit() {
    this.user = new User();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
}