import { Component, OnInit, Input } from '@angular/core';
import { AllCommunityModules, GridApi, Module } from '@ag-grid-community/all-modules';
import { SearchFilterComponent } from '../component/search-filter/search-filter.component';
import { StatusRendererComponent } from '../component/status-renderer/status-renderer.component';
import { StreamEditorComponent } from '../component/stream-editor/stream-editor.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() rowData: any[];
  @Input() columnDefs: any[];

  private gridApi: GridApi;
  private paginationPageSize = 5;
  private totalPages = 0;
 // private rowData = [];
  private frameworkComponents = {
    searchFilterComponent: SearchFilterComponent,
    statusRendererComponent: StatusRendererComponent,
    streamEditorComponent: StreamEditorComponent
  };
  private modules = AllCommunityModules;

  get PaginationPageSize(): number {
    return this.paginationPageSize;
  }

  get gridAPI(): GridApi {
    return this.gridApi;
  }

  get TotalPages(): number {
    return this.totalPages;
  }

  get RowData(): Array<any> {
    return this.rowData;
  }

  get FrameworkComponents(): object {
    return this.frameworkComponents;
  }

  get Modules(): Module[] {
    return this.modules;
  }



  constructor() { }

  ngOnInit() {
    
  
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.totalPages = this.gridApi.paginationGetTotalPages();
  }

}
