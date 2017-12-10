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

  legajo: number;
  private sub: any;

  constructor(private encuestaService: EncuestaService, private route: ActivatedRoute) {

   }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                console.log(params['token']);
                this.encuestaService.setToken(params['token']),
                this.encuestaService.setLegajoByToken()
        });
        this.materias$ = this.encuestaService.getMaterias();
    }

    createUser(materia) {
        this.encuestaService.agregarMateria(materia);
    }

}
