import {MatBottomSheetRef} from "@angular/material";
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '../../validation/validation.service';
import {Dependencies} from '../dependencies';
import {DependenciesService} from '../dependencies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dependencies-create',
  templateUrl: './dependencies-create.component.html',
  styleUrls: ['./dependencies-create.component.css']
})
export class DependenciesCreateComponent implements OnInit {

  constructor(private toastrService: ToastrService, private depService:DependenciesService, private bottomSheetRef: MatBottomSheetRef<DependenciesCreateComponent>,private _formBuilder: FormBuilder) {}
  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();
  firstFormGroup: FormGroup;

  newDep: Dependencies;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombreDependencia: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
    });
  }

  createDep(): Dependencies {
    this.depService.createDependency(this.newDep)
      .subscribe((dependecy) => {
        this.newDep = dependecy;
        this.create.emit();
        this.toastrService.success("La Dependencia fue creada exitosamente!", "Dep creation");
      }, err => {
        this.toastrService.error(err, "Error");
      });
      this.logValue();
    return this.newDep;
  }
  cancelCreation(): void {
    this.cancel.emit(); 
  }
  logValue()
  {
      console.log(this.firstFormGroup.getRawValue());
  }
}
