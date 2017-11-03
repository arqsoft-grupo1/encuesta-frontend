import { Component, OnInit } from '@angular/core';
import { OfertaService } from "../../../services/encuesta/oferta.service";
import { Oferta } from "../../../model/oferta";
import { EstadoMateria } from "../../../model/estadosMateria";
import { MatStepLabel } from '@angular/material';


@Component({
  selector: 'lista-oferta',
  templateUrl: './lista-oferta.component.html',
  styleUrls: ['./lista-oferta.component.css']
})
export class ListaOfertaComponent implements OnInit {
    matStepLabel;
    oferta;
    materias;
    materias_sugeridas = [];
    materias_aprobadas;
    loading = true;

    /*
        Genera 3 variables a mostrar en distintos paneles.
        materias_aprobadas: Viene por webservice con un flag "aprobada" que es un booleano
        materias_sugeridas: Cada materia que tiene el flag aprobada en true tiene un campo es_correlativa_de,
                            esto significa que es una lista de materias que podrían suceder a esta materia aprobada
        materias: Es la lista de materias que no se incluyen ni aprobadas ni sugeridas, de esta manera evitar informacion
                  duplicada.
    */
    constructor(private ofertaService: OfertaService) {
        ofertaService.getOferta().subscribe(
            data => {
                  this.oferta = new Oferta(data['oferta']);
                  this.materias = this.oferta.getMaterias();
                  this.materias_aprobadas = this.materias.filter(x => x['aprobada']);
                //   this.materias = this.materias.sort((x, y) => x['orden'] > y['orden']);
                  this.materias = this.materias.filter(x => !x['aprobada']);
                  this.generarMateriasSugeridas();
                  this.loading = false;
            },
            err => {
                console.log("No se pudo traer la informacion de la oferta, intente nuevamente")
            }
        );
    }
    /*
        Evalua UNICAMENTE en la variable materias_aprobadas, de esta manera aseguramos que no se
        sugieran materias correlativas sin haber aprobado materias anteriores. Si es que posee correlativas
        a estas las agrega en la variable materias_sugeridas.
    */
    generarMateriasSugeridas() {
        var tmp_sugeridas = [];
        for(var i = 0; i<5; i++) {
            // this.materias[i]['estado'] = EstadoMateria.VoyACursar;
            tmp_sugeridas.push(this.materias[i]);
        }
        this.agregarMateriasSugeridas(tmp_sugeridas);
    }
    /*
        Si ya existe dentro de las materias sugeridas no la toma en cuenta
        Tampoco la toma en cuenta si es correlativa pero ya esta aprobada
        Agrega la materia en la lista de materias_sugeridas y para evitar duplicaciones
        la saca de la lista de materias restantes.
    */
    agregarMateriasSugeridas(materias) {
        for(var i = 0; i<materias.length; i++) {
            if (!(this.existeMateriaSugeridaYa(materias[i]['id']))) {
                this.materias_sugeridas.push(materias[i]);
                // Quito la materia de la lista de materias generales para que no este duplicada
                this.eliminarMateriaDeMateriasGenerales(materias[i]['id']);
            }
        }
    }

    tieneMateriaAprobada(materiaId) {
        return this.materias_aprobadas.some(x => x['id'] === materiaId);
    }

    existeMateriaSugeridaYa(materiaId) {
        return this.materias_sugeridas.some(x => x['id'] === materiaId);
    }

    eliminarMateriaDeMateriasGenerales(materiaId) {
        this.materias = this.materias.filter(x => x['id'] !== materiaId);
    }

    ngOnInit() {

    }
}
