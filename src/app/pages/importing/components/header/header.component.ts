import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { range } from 'rxjs';

@Component({
    selector: 'header-component',
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {

    bordereauInfo: FormGroup;

    constructor(private fb: FormBuilder) { }

    maxToday: string = this.formatDate(new Date());

    reportingMonths: any = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    reportingYears: any = [];

    ngOnInit() {
        this.bordereauInfo = this.fb.group({
            mga: [, Validators.required],
            paAgreement: [, Validators.required],
            program: [, Validators.required],
            reportingMonth: [, Validators.required],
            reportingYear: [, Validators.required],
            receivedDate: [, Validators.required]
        });

        const startYear = 2005;
        const count = this.getYearDiff(startYear, 1);
        range(startYear, count).subscribe(year => { this.reportingYears.unshift(year) })
    }

    getControl(input: string) {
        return this.bordereauInfo.get(input)
    }

    isValid(id: string) {
        return (this.getControl(id).touched && (this.getControl(id).invalid && !this.getControl(id).dirty));
    }

    getYearDiff(startYear: number, offset: number) {
        return (new Date()).getUTCFullYear() + offset - startYear + 1;
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}