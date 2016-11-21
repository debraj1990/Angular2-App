import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {HTTPService} from 'core/services/http.service';

@Injectable()
export class AppResolveService implements Resolve<{}> {
    constructor(private httpService: HTTPService) { }
    resolve(): Promise<{}> {
        return this.httpService.getData().then(response => {
          return response;
        });
    }
}
