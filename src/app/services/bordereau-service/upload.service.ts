import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as environment from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    API_ENDPOINT: string = environment.environment.API_ENDPOINT; // add to environment.ts

    constructor(private httpClient: HttpClient) {

    }

    visualizeBordereau(file, sheetName): Observable<Object> {
        let dataFile: FormData = new FormData();
        dataFile.append('file', file);
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append("Content-Type", 'multipart/form-data');
        return this.httpClient.post(`${this.API_ENDPOINT}/import/visualize/${sheetName}`, dataFile, { headers });
    }

    uploadBordereau(result, filename) {
        return this.httpClient.post(`${this.API_ENDPOINT}/upload/${filename}`, result);
    }
}