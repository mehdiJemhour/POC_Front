import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isSidebarPinned = false;
  isSidebarToggeled = false;

  constructor(private http : HttpClient) { }

  toggleSidebar() {
    this.isSidebarToggeled = ! this.isSidebarToggeled;
  }

  toggleSidebarPin() {
    this.isSidebarPinned = ! this.isSidebarPinned;
  }

  getSidebarStat() {
    return {
      isSidebarPinned: this.isSidebarPinned,
      isSidebarToggeled: this.isSidebarToggeled
    }
  }

  //get File data
  
  get(fileName : any) {
    let path : string = null ;
    if(fileName.id == "ARL - Hotel Progam") {
     
    
        path = "https://d3p73jccieq6p3.cloudfront.net/Before_ARL_Hotel.json"
        
      } 
    else if ( fileName.id == "ENTORIA")  {
        path = "https://d3p73jccieq6p3.cloudfront.net/Before_transformation.json "
      
      } 
    return this.http.get(path)
  }

  
  getExtract(fileName : any) {
    
    let path : string = null ;
    if(fileName.id == "ARL - Hotel Progam") {
     
    
        path = "https://d3p73jccieq6p3.cloudfront.net/After_ARL_Hotel_extract.json"
        
      } 
    else if ( fileName.id == "ENTORIA")  {
        path = "https://d3p73jccieq6p3.cloudfront.net/After_transformation.json "
      
      } 
     
    
    

   
    return this.http.get(path)
  }

}
