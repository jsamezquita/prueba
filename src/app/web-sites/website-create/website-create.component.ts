import {MatBottomSheetRef} from "@angular/material";
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '../../validation/validation.service';


@Component({
  selector: 'app-website-create',
  templateUrl: './website-create.component.html',
  styleUrls: ['./website-create.component.css']
})
export class WebsiteCreateComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<WebsiteCreateComponent>,private _formBuilder: FormBuilder) {}

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      url: ['', [Validators.required,ValidationService.urlValidator]],
      description: ['', [Validators.required,Validators.minLength(50)]],
      purpose: ['', [Validators.required,Validators.minLength(20)]],
      chosenDate: ['', Validators.required],
      audience: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      state: ['', Validators.required]
    });
  }


}
