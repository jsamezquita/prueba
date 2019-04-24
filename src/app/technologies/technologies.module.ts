import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';
import { TechnologiesCreateComponent } from './technologies-create/technologies-create.component';
import { TechnologiesService } from './technologies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, 
         MatInputModule, MatStepperModule, 
         MatButtonModule, MatAutocompleteModule,
         MatSelectModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule, 
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule,
        BrowserAnimationsModule
    ],
    declarations: [TechnologiesListComponent, TechnologiesDetailComponent, TechnologiesCreateComponent],
    entryComponents: [TechnologiesCreateComponent],
    providers: [TechnologiesService],
    exports:[TechnologiesListComponent, TechnologiesDetailComponent, TechnologiesCreateComponent]
})
export class TechnologiesModule {}