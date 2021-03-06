import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { HTTPService }       from './services/http.service';
import { DataParsingService } from './utilities/data-parsing.service';
@NgModule({
    imports: [HttpModule, JsonpModule],
    providers: [HTTPService, DataParsingService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
