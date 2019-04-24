import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {UsersListComponent} from "../users/users-list/users-list.component";
import {AppComponent} from "../app.component";
import {WebsiteListComponent} from "../web-sites/website-list/website-list.component";
import {WebsiteRelatedListComponent} from "../web-sites/website-related-list/website-related-list.component";
import {AdminCreateComponent} from "../admin/admin-create/admin-create.component";
import {WebsiteDetailsComponent} from "../web-sites/website-details/website-details.component";
import {UsersCreateComponent} from "../users/users-create/users-create.component";
import { UsersEditComponent } from '../users/users-edit/users-edit.component';

const routes: Routes = [


    {
         path: 'login',
         component: AuthLoginComponent,
         canActivate: [NgxPermissionsGuard],
         data: {
             permissions: {
                 only: ['GUEST']
             }
         }
    },
   {
      path: 'register',
      component: AdminCreateComponent,
      outlet: 'register'
    },
    {
        path: 'registerUser',
        component: UsersCreateComponent,
        outlet: 'register'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'SiteList',
        component: WebsiteListComponent
    },
    {
        path: 'users',
        children:[
            {
                path:'list',
                component: UsersListComponent,
                outlet:'users'

            },
            {
                path: ':id',
                component: UsersEditComponent,
                outlet: 'edit'
            }
        ]
    },
    {
        path: 'websites',
        children:[
            {
                path:':site',
                component:WebsiteDetailsComponent,
                outlet: 'siteDetail'

            },
            {
                path: 'related',
                children:[
                    {
                        path: ':id',
                        component: WebsiteRelatedListComponent,
                        outlet: 'related'
                    }
                ],
            }
        ]
    },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
