import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { EncuestaService } from "../../../services/encuesta/encuesta.service";
import { MateriasAcursarService } from '../../../services/materias-acursar.service';
import { Oferta } from "../../../model/oferta";
import { Materia } from "../../../model/materia";
import { EstadoMateria } from "../../../model/estadosMateria";
import { MatStepLabel } from '@angular/material';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'lista-oferta',
  templateUrl: './lista-oferta.component.html',
  styleUrls: ['./lista-oferta.component.css']
})
export class ListaOfertaComponent implements OnInit {
    mail;
    matStepLabel;
    oferta;
    materias;
    materias_sugeridas;
    materias_aprobadas;
    loading = true;
    // private materias$: Observable<any[]>;

    /*
        Genera 3 variables a mostrar en distintos paneles.
        materias_aprobadas: Viene por webservice con un flag "aprobada" que es un booleano
        materias_sugeridas: Cada materia que tiene el flag aprobada en true tiene un campo es_correlativa_de,
                            esto significa que es una lista de materias que podrían suceder a esta materia aprobada
        materias: Es la lista de materias que no se incluyen ni aprobadas ni sugeridas, de esta manera evitar informacion
                  duplicada.
    */
    constructor(private route: ActivatedRoute, private encuestaService: EncuestaService, private materiaACursarService: MateriasAcursarService, private ofertaService: OfertaService) {
        this.route.params.subscribe( params =>
            this.mail = params['mail']
         );
        ofertaService.getOferta(this.mail).subscribe(
            data => {
                  console.log(data['token']);
                  materiaACursarService.setToken(data['token']);
                  this.oferta = new Oferta(data['oferta']);
                  materiaACursarService.setListaMaterias(this.oferta.getMaterias());

                  this.materias_sugeridas = materiaACursarService.getMateriasSugeridas();
                  this.materias_aprobadas = materiaACursarService.getMateriasYaAprobe();
                  this.materias = materiaACursarService.getListaMaterias();

                  this.loading = false;
            },
            err => {
                console.log("No se pudo traer la informacion de la oferta, intente nuevamente")
            }
        );
    }

    tieneMateriaAprobada(materiaId) {
        return this.materias_aprobadas.some(x => x['id'] === materiaId);
    }



    ngOnInit() {

    }
}
