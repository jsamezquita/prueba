import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminService } from './admin.service';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatStepperModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [AdminListComponent, AdminCreateComponent, AdminDetailComponent],
  providers: [AdminService],
  exports: [AdminListComponent, AdminCreateComponent, AdminDetailComponent]
})
export class AdminModule { }
