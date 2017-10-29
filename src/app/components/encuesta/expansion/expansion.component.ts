import { Component, OnInit } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { Oferta } from "../../../model/oferta";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { MatRadioModule } from '@angular/material';
// import { NgModule } from '@angular/core';
import { Materia } from '../../../model/materia'

@Component({
  selector: 'Expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
    oferta;
    materias;
    opciones = [
                    {value: 'yacurse', viewValue: 'Ya la curse'},
                    {value: 'todaviano', viewValue: 'Todavia no'},
                    {value: 'Elanoproximo', viewValue: 'Proximamente'}
                ];
    // materias = [
    //                 {id: 1, nombre: 'Introduccion a la programacion', orden: "1"},
    //                 {id: 2, nombre: 'Organizacion y Arquitectura', orden: "1"},
    //                 {id: 3, nombre: 'Matematica 1', orden: "1"},
    //                 {id: 4, nombre: 'Introduccion a base de datos', orden: "1"}
    //             ];

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
      ofertaService.getOferta().subscribe(
         data => {
             console.log(data);
             console.log(data['oferta']);
             this.oferta = new Oferta(data['oferta']);
             console.log("La oferta en si:" +  this.oferta.getMaterias());
             this.materias = this.oferta.getMaterias();
         },
         err => {
           console.log("No se pudo traer la informacion de la oferta, intente nuevamente")
         }
      );

  }
  ngOnInit(): void {

  }

}
