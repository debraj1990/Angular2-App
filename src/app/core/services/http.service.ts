import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { URLS } from 'core/constants/urls';

@Injectable()
export class HTTPService {
    private serviceURL = URLS.landing;

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getData(url = this.serviceURL): Promise<{}> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
}
