import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import { URLS } from 'core/constants/urls';
import {HTTPService} from 'core/services/http.service';

@Injectable()
export class UserListResolveService implements Resolve<any> {
    constructor(private httpService: HTTPService) { }
    resolve(): Promise<{}> {
        return this.httpService.getData(URLS.users.list).then(response => response);
    }
}
