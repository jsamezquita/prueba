import {MatBottomSheetRef} from "@angular/material";
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '../../validation/validation.service';
import {Technologies} from '../technologies';
import {TechnologiesService} from '../technologies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technologies-create',
  templateUrl: './technologies-create.component.html',
  styleUrls: ['./technologies-create.component.css']
})
export class TechnologiesCreateComponent implements OnInit {

  constructor(private toastrService: ToastrService, private techService:TechnologiesService, private bottomSheetRef: MatBottomSheetRef<TechnologiesCreateComponent>,private _formBuilder: FormBuilder) {}
  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  newTech: Technologies;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      version: ['', [Validators.required]],
      techCategory: ['', [Validators.required]],
      url: ['', [Validators.required,ValidationService.urlValidator]],
      descripcion: ['', [Validators.required,Validators.minLength(20)]],
    });
  }

  createTech(): Technologies {
    this.techService.createTechnology(this.newTech)
      .subscribe((tech) => {
        this.newTech = tech;
        this.create.emit(); //this.create.emit(); //No se si es con () o sin ()
        this.toastrService.success("La tecnología fue creada exitosamente!", "Tech creation");
      }, err => {
        this.toastrService.error(err, "Error");
      });
      this.logValue();
    return this.newTech;
  }
  cancelCreation(): void {
    this.cancel.emit(); //this.cancel.emit(); //No se si es con () o sin ()
  }
  logValue()
  {
      console.log(this.firstFormGroup.getRawValue());
  }

}
