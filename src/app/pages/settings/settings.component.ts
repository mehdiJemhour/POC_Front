import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/app.service';


//import { CustomDateComponent } from './custom-date-component.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  
  static title = "Bordereaux Administration "
  self 

  list$ = new BehaviorSubject([]);
  modifications = {}
  private gridApi;
  private gridColumnApi;

  private defaultColDef;
  private frameworkComponents;
  private fileName;

 
  columnAfter = [];
  rowData =[]
  
  constructor(private settings: AppService,private route: ActivatedRoute) { 
    this.self = SettingsComponent.title
    this.route.params.subscribe( params => this.fileName = params);
  }

  ngOnInit() {
  
    this.loadData()
  }
  

  loadData(){
    //after
    this.modifications = {}
    this.list$.next([])
    this.settings.getExtract(this.fileName).subscribe((res:any[]) => {
     this.columnAfter =  this.prepareDataTableHeaders(res[0])
      this.rowData = []
      if(this.fileName.id == "ENTORIA")
      {res.forEach(e =>{
      this.rowData.push({...e,"Ncontrat Compagnie" : e["N.contrat Compagnie"]})
      })}
      else  { 
        this.addOptionnalHeaders(["Net_premium","Omega_BS_Period","REB"])
        res.forEach(e =>{
         
        this.rowData.push({...e,"Net_premium" : e["Net_Change_Amount_Num"]-e["Commission Amount"],"Omega_BS_Period" :this.addBordereauMonth(e["Bordereau Month"]) ,"REB" : "Hoteltest"+this.getBordereauMonth(e["Bordereau Month"])+ "ak"})
         
        })}
    
     
    })
  }
  getBordereauMonth(date){
    var objDate = new Date(date),
    locale = "en-us",
    month = objDate.toLocaleString(locale, { month: "long" });
    return month
  }

  addBordereauMonth(date){
    var objDate = new Date(date)
    objDate.setMonth( objDate.getMonth() + 1 );
    return objDate.toLocaleDateString()
  }

  addOptionnalHeaders(Headers){
    Headers.forEach(propertyName => {
        
      let header: any = {};
      header['headerName'] = propertyName;
      header['field'] = propertyName; 
      this.columnAfter.push(header);           
      })
     
  }
  prepareDataTableHeaders(param:any): Array<any> {
    let result: Array<any> = new Array<any>();
    var i:number; 
    Object.getOwnPropertyNames(param).forEach(propertyName => {
        
        let header: any = {};
        header['headerName'] = propertyName;
        header['field'] = propertyName.replace('.',''); 
        result.push(header);           
        })
       
    return result;
}

  onPluginChanged(event){
    this.modifications[event.id] = event.value
  }

  canUpdate() {
    return Object.keys(this.modifications).length > 0
  }

  

}
