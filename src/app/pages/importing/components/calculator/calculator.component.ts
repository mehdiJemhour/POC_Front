import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isNumber } from 'util';

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

    @Input("columns") excelColumns: any = [];
    @Output() onInput: EventEmitter<any> = new EventEmitter();

    results: string;
    numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    onSelectCalcul(value) {
        if (isNumber(value))
            this.results = `${this.results || ''}${value}`
        else
            this.results = `${this.results || ''}${value} `
        this.onInput.emit(this.results);
    }

    reset() {
        this.results = null;
    }

}