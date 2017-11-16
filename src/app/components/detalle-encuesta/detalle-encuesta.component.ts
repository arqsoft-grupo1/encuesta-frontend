import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MateriasAcursarService } from '../../services/materias-acursar.service';
import { Materia } from "../../model/materia"
import { ActivatedRoute } from '@angular/router';
import { EncuestaService } from '../../services/encuesta/encuesta.service';

@Component({
  selector: 'DetalleEncuesta',
  templateUrl: './detalle-encuesta.component.html',
  styleUrls: ['./detalle-encuesta.component.css']
})
export class DetalleEncuestaComponent {
  title = 'app';
  private materias$;

  legajo: number;
  private sub: any;

  constructor(private materiaACursarService: MateriasAcursarService, private route: ActivatedRoute, private encuestaService: EncuestaService) {

   }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {this.materiaACursarService.setLegajo(+params['legajo']);

        });
        this.materias$ = this.materiaACursarService.getMaterias();
    }


    createUser(materia) {
        this.materiaACursarService.agregarMateria(materia);
    }

}
