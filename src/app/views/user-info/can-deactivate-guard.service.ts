import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<boolean> {
    canDeactivate() {
        return true;
    }
}
