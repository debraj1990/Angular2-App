import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppAuthGuardService } from './app-auth-guard.service';
import { AppResolveService } from './app-resolve.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: '../views/home/home.module#HomeModule',
        canLoad: [AppAuthGuardService],
        resolve: {
          data: AppResolveService
        }
    },
    {
        path: 'userDetails',
        loadChildren: '../views/user-details/userDetails.module#UserDetailsModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
