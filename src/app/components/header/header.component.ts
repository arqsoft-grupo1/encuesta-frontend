import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    date = new Date();
    year = this.date.getFullYear();
    cuatrimestre = this.getCuatrimestre();

  constructor() {
  }

  ngOnInit() {
  }

  getCuatrimestre(){
      var month = this.date.getMonth();
      if(month < 6){
          return "C1";
      } else {
          return "C2";
      }
  }

}
