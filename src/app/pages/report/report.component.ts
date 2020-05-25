import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



//import { CustomDateComponent } from './custom-date-component.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  
  static title = "Data Report"
  self 

  list$ = new BehaviorSubject([]);
  modifications = {}
  private gridApi;
  private gridColumnApi;

  private defaultColDef;
  private frameworkComponents;
  claimsData1 : boolean = false
  claimsData2 : boolean = false
  claimsData3 : boolean = false
  
  
  constructor() { 
    this.self = ReportComponent.title
  }

  ngOnInit() {
    
  }
  
get1(){
  this.claimsData1 = true
  this.claimsData2 = false
  this.claimsData3 = false
}
get2(){
  this.claimsData1 = false
  this.claimsData2 = true
  this.claimsData3 = false
}
get3(){
  this.claimsData1 = false
  this.claimsData2 = false
  this.claimsData3 = true
}
  

  onPluginChanged(event){
    this.modifications[event.id] = event.value
  }

  canUpdate() {
    return Object.keys(this.modifications).length > 0
  }

  

}
