import { Component, OnInit } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { Oferta } from "../../../model/oferta";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatRadioModule } from '@angular/material';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'Expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {

    opciones = [
                    {value: 'yacurse', viewValue: 'Ya curse'},
                    {value: 'todaviano', viewValue: 'Todavia no'},
                    {value: 'Elanoproximo', viewValue: 'Proximamente'}
                ];
    materias = [
                    {id: 1, nombre: 'Introduccion a la programacion', orden: "1"},
                    {id: 2, nombre: 'Organizacion y Arquitectura', orden: "1"},
                    {id: 3, nombre: 'Mate 1', orden: "1"},
                    {id: 4, nombre: 'IBD', orden: "1"}
                ];

    favoriteSeason: string;

    seasons = [
      'Prolijo',
      'Curioso',
      'Gloton',
      'Homosexual',
    ];

    step = 0;

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

  constructor(private ofertaService: OfertaService) {
    //  this.oferta = this.ofertaService.getOferta();
    //   console.log(this.oferta);
  }

  ngOnInit() {

    //  console.log(this.oferta);

  }

}
