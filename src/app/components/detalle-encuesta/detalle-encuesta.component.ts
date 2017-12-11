import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { Materia } from "../../model/materia"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'DetalleEncuesta',
  templateUrl: './detalle-encuesta.component.html',
  styleUrls: ['./detalle-encuesta.component.css']
})
export class DetalleEncuestaComponent {
  title = 'app';
   materias$;
   alumno;
  legajo: number;
  private sub: any;

  constructor(private encuestaService: EncuestaService, private route: ActivatedRoute) {

   }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.encuestaService.setToken(params['token']),
                this.alumno = this.encuestaService.getAlumnoByToken(params['token']).subscribe(
                    data => {
                        this.alumno = data;
                    }
                );
                this.encuestaService.setLegajoByToken()
                console.log(this.alumno)

        });
        this.materias$ = this.encuestaService.getMaterias();
    }

    createUser(materia) {
        this.encuestaService.agregarMateria(materia);
    }

}
