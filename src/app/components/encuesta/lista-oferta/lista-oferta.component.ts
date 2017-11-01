import { Component, OnInit } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { Oferta } from "../../../model/oferta";


@Component({
  selector: 'lista-oferta',
  templateUrl: './lista-oferta.component.html',
  styleUrls: ['./lista-oferta.component.css']
})
export class ListaOfertaComponent implements OnInit {
    oferta;
    materias;
    materias_sugeridas = [];
    materias_aprobadas;
    tmp_mat = [];

    constructor(private ofertaService: OfertaService) {
        ofertaService.getOferta().subscribe(
            data => {
             //  console.log(data);
             //  console.log(data['oferta']);
                  this.oferta = new Oferta(data['oferta']);
                 //  console.log("La oferta en si:" +  this.oferta.getMaterias());
                  this.materias = this.oferta.getMaterias();
                  this.materias_aprobadas = this.materias.filter(this.materiaAprobada);
                  this.materias = this.materias.filter(this.materiaACursar);
                  this.generarMateriasSugeridas();
            },
            err => {
                console.log("No se pudo traer la informacion de la oferta, intente nuevamente")
            }
        );
    }

    generarMateriasSugeridas() {
        //console.log(this.materias_aprobadas.length);
        for(var i = 0; i<this.materias_aprobadas.length; i++) {
            if (!(this.materias_aprobadas[i]['es_correlativa_de'] === undefined)) {
                 //console.log(this.tmp_mat);
                this.agregarMateriasSugeridas(this.materias_aprobadas[i]['es_correlativa_de']);
                //console.log(this.materias_sugeridas);
            }

        }
        //console.log(this.materias_aprobadas);
    }

    agregarMateriasSugeridas(materias) {
        for(var i = 0; i<materias.length; i++) {
            if (!(this.materias_sugeridas.some(x => x === materias[i]))) {
                this.materias_sugeridas.push(materias[i]);
            }
        }
    }

    existeMateria(element, index, array) {
        console.log(element, index, array);
        return true;
    }

    materiaAprobada(element, index, array) {
        return (element['aprobada']);
    }

    materiaACursar(element, index, array) {
        return (!element['aprobada']);
    }

    materiasSugeridas() {

    }

    ngOnInit() {

    }
}
