import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesCreateComponent } from './changes-create/changes-create.component';
import { ChangesListComponent } from './changes-list/changes-list.component';
import { ChangesService } from './changes.service';
import { MatFormFieldModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [ChangesCreateComponent, ChangesListComponent],
  providers: [ChangesService],
  exports: [ChangesCreateComponent, ChangesListComponent]
})
export class ChangesModule { }
