import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements OnInit {

  static title = "Access Report"
  private fileName;
  self 

  columnAfter = [
    
    
];

columnBefore = [
 
  
];

rowData = []

rowDataExtract = []

  claimsData : boolean = false
  constructor(private settings: AppService ,private route: ActivatedRoute) { 
    this.self = SwaggerComponent.title
    this.route.params.subscribe( params => this.fileName = params);
  }

  ngOnInit() {
   
    this.settings.get(this.fileName).subscribe((res:any[]) => {
      
      this.columnBefore =  this.prepareDataTableHeaders(res[0])
      this.rowData = []
    
      if(this.fileName.id == "ENTORIA")
      {res.forEach(e =>{
      this.rowData.push({...e,"Ncontrat Compagnie" : e["N.contrat Compagnie"]})
      })}
      else  { 
        this.addOptionnalHeadersBefore(["Net_premium","Omega_BS_Period","REB"])
        res.forEach(e =>{
         
        this.rowData.push({...e,"Net_premium" : e["Net_Change_Amount_Num"]-e["Commission Amount"],"Omega_BS_Period" :this.addBordereauMonth(e["Bordereau Month"]) ,"REB" : "Hoteltest"+this.getBordereauMonth(e["Bordereau Month"])+ "ak"})
         
        })}
    
     
    })

    this.settings.getExtract(this.fileName).subscribe((res:any[]) => {
      
      this.columnAfter =  this.prepareDataTableHeaders(res[0])
      this.rowDataExtract = []
      
      if(this.fileName.id == "ENTORIA")
      {res.forEach(e =>{
        this.rowDataExtract.push({...e,"Ncontrat Compagnie" : e["N.contrat Compagnie"]})
      })}
      else  { 
        this.addOptionnalHeaders(["Net_premium","Omega_BS_Period","REB"])
        res.forEach(e =>{
         
        this.rowDataExtract.push({...e,"Net_premium" : e["Net_Change_Amount_Num"]-e["Commission Amount"],"Omega_BS_Period" :this.addBordereauMonth(e["Bordereau Month"]) ,"REB" : "Hoteltest"+this.getBordereauMonth(e["Bordereau Month"])+ "ak"})
         
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
      header['field'] = propertyName.replace('.',''); 
      this.columnAfter.push(header);           
      })
     
  }

  addOptionnalHeadersBefore(Headers){
    Headers.forEach(propertyName => {
        
      let header: any = {};
      header['headerName'] = propertyName;
      header['field'] = propertyName.replace('.',''); 
      this.columnBefore.push(header);           
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
}
