import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


 

  constructor(private router:Router) { }

  ngOnInit() {}

  get_reportData()
  {
    this.router.navigate(['reportData']);  }

  load_data(id : any){
    this.router.navigate(['excel',{queryParams :id,skipLocationChange : true}]);  }

  get_report(id : any){
  this.router.navigate(['report',{queryParams :id,skipLocationChange : true}]);  }

}
