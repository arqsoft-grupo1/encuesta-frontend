import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MateriasAcursarService } from './services/materias-acursar.service';
import { Materia } from "./model/materia"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  private materias$: Observable<any[]>;

  constructor(private materiaACursarService: MateriasAcursarService) {

   }

    ngOnInit() {
        this.materias$ = this.materiaACursarService.getMaterias();
    }


    createUser(materia) {
        this.materiaACursarService.agregarMateria(materia);
    }

}
