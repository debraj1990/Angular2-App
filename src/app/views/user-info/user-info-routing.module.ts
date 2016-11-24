import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserInfoComponent} from './user-info.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';

import {UserListResolveService} from './user-list/user-list-resolve.service';

const routes: Routes = [
    {
        path: '',
        component: UserInfoComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
              path: 'new',
              component: UserFormComponent
            },
            {
              path: 'list',
              component: UserListComponent,
              resolve: {
                data: UserListResolveService
              }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserInfoRoutingModule { }
