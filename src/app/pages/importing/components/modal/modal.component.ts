import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-select',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    constructor(public activeModal: NgbActiveModal) { }

    columnDefs = [];

    columnDefinition: {
        field: string,
        type: string,
        value: string
    } = {
            field: '',
            type: 'static', // static | calculated
            value: ''
        };

    onSave() {
        const { field, value, type } = this.columnDefinition;
        if (field || value) {
            let result = {
                columnName: field,
                valueType: type,
                data: {
                    value
                }
            }
            this.activeModal.close({ result })
        }
    }

    onInput(value) {
        this.columnDefinition.value = value;
    }
}