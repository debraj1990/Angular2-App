import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeAuthGuard} from './home-auth-guard.service';
@NgModule({
    imports: [
      SharedModule,
      HomeRoutingModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [
      HomeAuthGuard
    ]
})
export class HomeModule { }
