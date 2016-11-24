import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {OrderByPipe} from './pipes/orderby.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [OrderByPipe],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrderByPipe
    ]
})
export class SharedModule { }
