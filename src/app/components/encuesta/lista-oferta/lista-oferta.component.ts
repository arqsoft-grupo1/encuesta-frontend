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
    materias_sugeridas;
    materias_aprobadas;

    constructor(private ofertaService: OfertaService) {
        ofertaService.getOferta().subscribe(
            data => {
             //  console.log(data);
             //  console.log(data['oferta']);
                  this.oferta = new Oferta(data['oferta']);
                 //  console.log("La oferta en si:" +  this.oferta.getMaterias());
                  this.materias = this.oferta.getMaterias();
            },
            err => {
                console.log("No se pudo traer la informacion de la oferta, intente nuevamente")
                }
        );

        
    }

      ngOnInit() {

      }
}
