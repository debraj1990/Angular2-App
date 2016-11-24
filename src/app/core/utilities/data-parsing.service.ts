import {Injectable} from '@angular/core';

@Injectable()
export class DataParsingService {
    constrcutor() {}

    getKeys(item: any): (Array<string> | null) {
        if (!item) { return null; }

        let keys = new Array<string>();
        for (let key in item) {
            keys.push(key);
        }
        return keys;
    }
}
