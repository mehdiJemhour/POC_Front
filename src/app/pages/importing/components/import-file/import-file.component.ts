import { Component, Output, EventEmitter } from '@angular/core';
import * as xlsx from 'xlsx';

@Component({
    selector: 'import-file',
    templateUrl: "./import-file.component.html",
    styleUrls: ["./import-file.component.css"]
})
export class ImportFileComponent {

    filename: string = null;
    @Output("onLoadFile") onLoadFile: EventEmitter<any> = new EventEmitter();

    loadFile(event: any) {
        let file: File = event.target.files[0];
        this.filename = file.name
        this.importFromFile(file);
    }

    public importFromFile(file) {

        let reader = new FileReader();
        reader.onload = (event) => {
            const { result } = reader;
            const sheetNames = this.getSheetNames(result);
            let data = {
                file: file,
                sheetNames
            }
            this.onLoadFile.emit(data)
        }
        reader.readAsBinaryString(file);
    }

    private getSheetNames(reader: string | ArrayBuffer): Array<string> {
        let workBook: xlsx.WorkBook;
        workBook = xlsx.read(reader, { type: 'binary' });
        return workBook.SheetNames;
    }
}