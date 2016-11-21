import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './routes.module';
import {AppComponent} from './app.component';
import {AppAuthGuardService} from './app-auth-guard.service';
import {AppResolveService} from './app-resolve.service';

import {CoreModule} from 'core/core.module';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [AppComponent],
    providers: [
        AppAuthGuardService,
        AppResolveService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
