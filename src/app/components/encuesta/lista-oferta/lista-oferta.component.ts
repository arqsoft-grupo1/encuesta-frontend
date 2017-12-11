import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { EncuestaService } from '../../../services/encuesta/encuesta.service';
import { Oferta } from "../../../model/oferta";
import { Materia } from "../../../model/materia";
import { EstadoMateria } from "../../../model/estadosMateria";
import { MatStepLabel } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';

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
    token;
    loading = true;

    /*
        Genera 3 variables a mostrar en distintos paneles.
        materias_aprobadas: Viene por webservice con un flag "aprobada" que es un booleano
        materias_sugeridas: Cada materia que tiene el flag aprobada en true tiene un campo es_correlativa_de,
                            esto significa que es una lista de materias que podrían suceder a esta materia aprobada
        materias: Es la lista de materias que no se incluyen ni aprobadas ni sugeridas, de esta manera evitar informacion
                  duplicada.
    */
    constructor(private router: Router, private route: ActivatedRoute, private encuestaService: EncuestaService, private ofertaService: OfertaService, public snackBar: MatSnackBar) {
        this.route.params.subscribe( params => {
            this.token = params['token'],
            encuestaService.getAlumnoByToken(this.token).subscribe(
                data => {
                    this.mail = data['mail'];
                },
                err => {
                    this.snackBar.open("Ha ocurrido un error, verifique el token de la encuesta", "", {
                        duration: 3000,
                    });
                    this.router.navigate(['/homepage']);
                }
            );
        })

        ofertaService.getOferta(this.token).subscribe(
            data => {
                  encuestaService.setToken(this.token);
                  this.oferta = new Oferta(data['oferta']);
                  encuestaService.setListaMaterias(this.oferta.getMaterias());
                  this.materias_sugeridas = encuestaService.getMateriasSugeridas();
                  this.materias_aprobadas = encuestaService.getMateriasAprobadas();
                  this.materias = encuestaService.getListaMaterias();
                  this.loading = false;
            },
            err => {
                this.snackBar.open("Ha ocurrido un error, por favor intente nuevamente", "", {
                duration: 3000,
                });
            }
        );
    }

    getMateriasSugeridas(){
        if(this.materias_sugeridas != undefined){
            return this.materias_sugeridas.length;
        }
    }

    getMateriasAprobadas(){
        if(this.materias_aprobadas != undefined){
            return this.materias_aprobadas.length;
        }

    }

    getRestoMaterias(){
        if(this.materias != undefined){
            return this.materias.length;
        }
    }

    ngOnInit() {
    }
}
