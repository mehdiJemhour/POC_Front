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
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/excel-like/component/common/material.module';




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
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
