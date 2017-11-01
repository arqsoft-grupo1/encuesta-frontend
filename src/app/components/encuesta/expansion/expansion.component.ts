import { Component, ElementRef,ViewChild, OnInit, Input } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { Oferta } from "../../../model/oferta";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatRadioModule } from '@angular/material';
// import { NgModule } from '@angular/core';
import { Materia } from '../../../model/materia'
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'Expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})


export class ExpansionComponent implements OnInit {
    @Input() materias;
    @Input() materias_a_mostrar;
    materias_respuesta: [string, string];

    respuesta: string[] = [];

    opciones = [
        {value: 'yaaprobe', viewValue: 'Ya aprobé'},
        {value: 'todaviano', viewValue: 'Todavia no'},
        {value: 'nopuedohorario', viewValue: 'La cursaría pero no puedo por el horario'},
        {value: 'voyacursar', viewValue: 'Voy a cursar'}
    ];

    comisionElegida: string[] = [];

    step = 0;

    placeholderSelect = 'Seleccionar';

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

  }


    ngOnInit(): void {

    }

    respuestaVoyACursar(i) {
        // console.log(this.respuesta);
        return this.respuesta[i] == 'voyacursar';
    }

    getEstado(i) {
        //console.log(this.respuesta[i]);
        switch(this.respuesta[i]) {
           case 'yaaprobe': {
              return 'done';
           }
           case 'todaviano': {
              return 'error';
           }
           case 'nopuedohorario': {
              return 'schedule';
           }
           case 'voyacursar': {
               if (this.comisionElegida[i] === undefined) {
                   return 'warning';
               } else {
                   return 'mood';
               }
           }
           default: {
              return 'description';
           }
        }
    }

}
