import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {HomeAuthGuard} from './home-auth-guard.service';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [HomeAuthGuard]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ]
})
export class HomeRoutingModule { }
