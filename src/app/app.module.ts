import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SwaggerComponent } from './pages/swagger/swagger.component';
import { ReportComponent } from './pages/report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';
import { GridComponent } from './shared/excel-like/grid/grid.component';
import { PaginationComponent } from './shared/excel-like/component/pagination/pagination.component';
import { SearchFilterComponent } from './shared/excel-like/component/search-filter/search-filter.component';
import { StreamEditorComponent } from './shared/excel-like/component/stream-editor/stream-editor.component';
import { StatusRendererComponent } from './shared/excel-like/component/status-renderer/status-renderer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/excel-like/component/common/material.module';
import { ImportComponent } from './pages/importing/importing.component';
import { HeaderComponent } from './pages/importing/components/header/header.component';
import { ImportFileComponent } from './pages/importing/components/import-file/import-file.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './pages/importing/components/modal/modal.component';
import { CalculatorComponent } from './pages/importing/components/calculator/calculator.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    SwaggerComponent,
    ReportComponent,
    GridComponent,
    PaginationComponent,
    SearchFilterComponent,
    StreamEditorComponent,
    StatusRendererComponent,
    ImportComponent,
    HeaderComponent,
    ImportFileComponent,
    ModalComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    AgGridModule.withComponents([SearchFilterComponent, StatusRendererComponent, StreamEditorComponent]),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
