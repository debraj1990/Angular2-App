import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UserDetailsComponent} from './userDetails.component';
import {UserDetailsRoutingModule} from './userDetails-routing.module';

@NgModule({
    imports: [SharedModule, UserDetailsRoutingModule],
    declarations: [UserDetailsComponent]
})
export class UserDetailsModule { }
