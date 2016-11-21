import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HTTPService {
    private serviceURL = "http://localhost:3000/api/mocks/landingPage/";

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getData(): Promise<{}> {
        return this.http.get(this.serviceURL)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
}
