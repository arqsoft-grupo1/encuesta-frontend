import { Component, ElementRef,ViewChild, OnInit, Input } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { MateriasAcursarService } from '../../../services/materias-acursar.service';
import { Oferta } from "../../../model/oferta";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatRadioModule } from '@angular/material';
// import { NgModule } from '@angular/core';
import { Materia } from '../../../model/materia'
import { EstadoMateria } from '../../../model/estadosMateria'
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'Expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})


export class ExpansionComponent implements OnInit {
    @Input() materias ;
    @Input() seleccion;
    private materias$;

    opciones = [
        {value: EstadoMateria.YaAprobe, viewValue: 'Ya aprobé'},
        {value: EstadoMateria.TodaviaNo, viewValue: 'Todavia no'},
        {value: EstadoMateria.NoPuedoPorHorario, viewValue: 'La cursaría pero no puedo por el horario'},
        {value: EstadoMateria.VoyACursar, viewValue: 'Voy a cursar'}
    ];

    // comisionElegida: string[] = [];

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

  constructor(private materiaACursarService: MateriasAcursarService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

  }


    ngOnInit(): void {

    }

    respuestaVoyACursar(materia) {
        // console.log(materia);
        return materia['estado'] == EstadoMateria.VoyACursar;
    }

    agregarMateria(materia) {
        console.log(materia);
        this.materiaACursarService.agregarMateria(materia);
    }

    getEstado(materia) {
        //console.log(this.materias[i]);
        // console.log(materia['estado']);
        // console.log(materia);
        switch(materia['estado']) {
           case EstadoMateria.YaAprobe: {
              return 'done';
           }
           case EstadoMateria.TodaviaNo: {
              return 'error';
           }
           case EstadoMateria.NoPuedoPorHorario: {
              return 'schedule';
           }
           case EstadoMateria.VoyACursar: {
                if (materia['comisionElegida'] === undefined) {
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
