import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserDetailsComponent} from './userDetails.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UserDetailsComponent }
  ])]
})
export class UserDetailsRoutingModule {}
