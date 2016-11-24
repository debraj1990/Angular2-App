import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { DataParsingService } from 'core/utilities/data-parsing.service';
import {UserService} from '../user.service';
import {KeyNames} from '../constants/user-fields';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.template.html',
    styleUrls: [
      './user-list.style.scss'
    ]
})
export class UserListComponent implements OnInit {
    private list: Array<string>;
    private fields: Array<Object>;
    private sortByColumn: String;
    constructor(
        private route: ActivatedRoute,
        private dataParsingService: DataParsingService
    ) {
      this.sortByColumn = "id";
     }

    ngOnInit() {
        this.route.data
            .subscribe((data: any) => {
                this.list = data.data.users;
                this.fields = this.getKeyMappings(this.list, KeyNames);
            });
    }

    sortBy(column: String) {
      this.sortByColumn = column;
    }

    getKeyMappings(arr: Array<string>, keyNameList: Object): any {
        let keyList: Array<string>,
            keys: Array<Object> = [];
        if (arr && arr.length > 0) {
            keyList = this.dataParsingService.getKeys(arr[0]);
            for (let key of keyList) {
                keys.push({
                  key: key,
                  value: keyNameList[key]
                });
            }
        }
        return keys;
    }
}
