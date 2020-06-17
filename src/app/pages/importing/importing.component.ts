import { Component, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/excel-like/grid/grid.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { UploadService } from 'src/app/services/bordereau-service/upload.service';


@Component({
    selector: 'import-component',
    templateUrl: './importing.component.html',
    styleUrls: ['./importing.component.scss']
})
export class ImportComponent {

    constructor(private modalService: NgbModal, private uploadService: UploadService) { }

    @ViewChild('insideForm', null) insideForm;
    @ViewChild(GridComponent, null) gridElement: GridComponent;

    columnDefs: any = [
        { field: 'Test' }
    ];
    rowData = [];
    sheetNames: Array<string> = [];
    file: File;
    financialColumns = [];


    loadedFile(data) {
        const { file, sheetNames } = data;
        this.sheetNames = sheetNames;
        this.file = file;
    }

    onSelect(sheetName) {
        this.uploadService.visualizeBordereau(this.file, sheetName).subscribe(response => {
            const financialColumns = response['financialColumns'];
            const data = response['data'];
            this.rowData = data;
            let columns = Object.keys(data[0]).map(key => ({ "field": key }))
            this.columnDefs = columns;
            this.financialColumns = financialColumns;
        });
    }

    open() {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.columnDefs = this.financialColumns;
        modalRef.result.then(result => {
            const { columnName, valueType, data } = result.result;
            this.addColumn({ columnName, type: valueType, data })
        }).catch(error => {
            console.info(error);
        })
    }

    private addColumn(column) {
        this.columnDefs.push({ field: column.columnName });
        this.gridElement.agGrid.api.setColumnDefs(this.columnDefs);
        let isCalculated = column.type == "calculed";
        this.addValueToRows(column.columnName, column.data.value, isCalculated);
    }

    private addValueToRows(key: string, value: string, isCalculated) {
        if (isCalculated) {
            this.rowData.map(item => {
                let result = value;
                Object.keys(item).forEach(k => result = result.replace(k, item[k]));
                item[key] = eval(result);
                return item;
            })
        } else
            this.rowData.map(item => {
                item[key] = value
                return item;
            })
        this.gridElement.agGrid.api.setRowData(this.rowData);
    }

}