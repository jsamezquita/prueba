import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {CdkStepperModule} from '@angular/cdk/stepper';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {WebSitesModule} from "./web-sites/web-sites.module";
import {UsersModule} from "./users/users.module";
import {EstadosWebModule} from "./estados-web/estados-web.module";
import {DependenciesModule} from './dependencies/dependencies.module';
import {TechnologiesModule} from "./technologies/technologies.module";
import {
    MatButtonModule,
    MatChipsModule,
    MatIconModule, MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatSnackBarModule
} from "@angular/material";
import {EstadosWebListComponent} from "./estados-web/estados-web-list/estados-web-list.component";
import { AdminModule } from './admin/admin.module';
import {ChangesModule } from './cambios/changes.module';
 






@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents:[AppComponent]
    ,
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        MatFormFieldModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        WebSitesModule,
        MatTabsModule,
        MatToolbarModule,
        MatBottomSheetModule,
        MatStepperModule,
        EstadosWebModule,
        UsersModule,
        AdminModule,
        ChangesModule,
        TechnologiesModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatMenuModule,
        MatSnackBarModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {
}
