import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciesDetailComponent } from './dependencies-detail/dependencies-detail.component';
import { DependenciesCreateComponent } from './dependencies-create/dependencies-create.component';
import { DependenciesService } from './dependencies.service';
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
    declarations: [DependenciesDetailComponent, DependenciesCreateComponent],
    entryComponents: [DependenciesCreateComponent],
    providers: [DependenciesService],
    exports:[DependenciesDetailComponent, DependenciesCreateComponent]
})
export class DependenciesModule {}