import {NgModule} from '@angular/core';

import {SharedModule} from 'shared/shared.module';
import {UserInfoComponent} from './user-info.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserInfoRoutingModule} from './user-info-routing.module';

import {UserService} from './user.service';
import {UserListResolveService} from './user-list/user-list-resolve.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
@NgModule({
    imports: [SharedModule, UserInfoRoutingModule],
    declarations: [UserInfoComponent, UserFormComponent, UserListComponent],
    providers: [UserService, UserListResolveService, CanDeactivateGuard]
})
export class UserInfoModule { }
