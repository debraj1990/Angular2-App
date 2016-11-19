import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: '../views/home/home.module#HomeModule' },
    { path: 'userDetails', loadChildren: '../views/user-details/userDetails.module#UserDetailsModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
