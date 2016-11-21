import { Component, OnInit } from '@angular/core';

import { HTTPService } from 'core/services/http.service';

@Component({
    selector: 'my-home',
    templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
    constructor(private http: HTTPService) { }

    ngOnInit() {}
}
