import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { HTTPService } from 'core/services/http.service';

@Injectable()
export class AppAuthGuardService implements CanLoad {
    constructor(private httpService: HTTPService) { }

    canLoad(): boolean {
        return true;
    }
}
