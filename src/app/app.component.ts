import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MateriasAcursarService } from './services/materias-acursar.service';
import { Materia } from "./model/materia"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  private materias$: Observable<any[]>;

  constructor(private materiaACursarService: MateriasAcursarService) {

   }

    ngOnInit() {
        this.materias$ = this.materiaACursarService.getMaterias();
        // console.log(this.materias$);
         this.materiaACursarService.loadDummyData();
         var materia: Materia = {
                       "id":39,
                       "nombre": "Complementaria III",
                       "orden": 10,
                       "aprobada": false
                 }
                 console.log("pasa por aca, agregando materia");
                this.materiaACursarService.agregarMateria(materia);
    }


    createUser(materia) {
        this.materiaACursarService.agregarMateria(materia);
    }

}
