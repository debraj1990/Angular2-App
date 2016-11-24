import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FieldValues} from '../constants/user-fields';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.template.html',
    styleUrls: ['./user-form.style.scss']
})
export class UserFormComponent {
    form: FormGroup;
    fieldValues: Object;
    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            designation: ['', Validators.required],
            domain: "Creative",
            careerStage: '',
            team: 'Experiences: SCG-Front End Development',
            practice: 'XT',
            unit: 'SNINDIA',
            region: 'IND',
            metro: 'Gurgaon',
            billableStatus: '',
            allocationStatus: ''
        });
        this.fieldValues = FieldValues;
    }
}
