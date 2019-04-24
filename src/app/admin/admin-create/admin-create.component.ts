import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../admin';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import {    ValidationService} from "../../validation/validation.service";


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
    hide = true;

  constructor(
    private adminService: AdminService,
    private toastrService: ToastrService,
    private router: Router,
    private _formBuilder: FormBuilder
) {}

/**
* The new book
*/
admin: Admin;

nombreCargos = ["Responsable", "Dueño", "Encargado"];
    createUserForm: FormGroup;

/**
* Cancels the creation of the new book
* Redirects to the books' list page
*/
cancelCreation(): void {
    this.toastrService.warning('The admin wasn\'t created', 'Admin creation');
}

/**
* Creates a new book
*/
createAdmin(): Admin {
    if( this.admin.nombreCargo == "Responsable" ){
        this.admin.nivel=1;
    } 
    else if( this.admin.nombreCargo == "Dueño" ){
        this.admin.nivel=3;
    }
    else if( this.admin.nombreCargo == "Encargado" ){
        this.admin.nivel=2;
    }
    this.adminService.createAdmin(this.admin)
        .subscribe(book => {
            this.admin.id = book.id;
            this.router.navigate(['/admin/' + book.id]);
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    return this.admin;
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.createUserForm = this._formBuilder.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required,ValidationService.emailValidator]],
        telefono: ['', [Validators.required,Validators.minLength(20)]],
        nombreCargo:['',Validators.required],
        password: ['', [Validators.required,Validators.minLength(8)]]
    });
    this.admin = new Admin();
}
logValue()
{
    console.log(this.createUserForm.getRawValue());
}
}