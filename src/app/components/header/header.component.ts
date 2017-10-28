import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    cuatrimestreActual = "C1";
    anoActual = "2018";
    cuatAnoActual = this.anoActual+this.cuatrimestreActual;
    anoActual2 = Date.now();
    // cuatActual2;


  constructor() {
    //   this.cuatActual2 = this.cuatrimestre();
  }

  ngOnInit() {
  }

  // cuatrimestre(){
  //
  // }

}
