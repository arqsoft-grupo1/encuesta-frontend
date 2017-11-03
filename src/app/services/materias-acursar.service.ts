import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Materia } from '../model/materia'

export const DUMMY_DATA = [
    {
        "id":40,
        "nombre": "Aspectos Legales",
        "orden": 10,
        "aprobada": false
    }

];

@Injectable()
export class MateriasAcursarService {
        private materiasACursarSubject = new BehaviorSubject([]);
        private materias: Materia[];
        constructor() { }

        getMaterias(): Observable<Materia[]> {
            return this.materiasACursarSubject.asObservable();
        }

        private refresh() {
            // Emitir los nuevos valores para que todos los que dependan se actualicen.
            this.materiasACursarSubject.next(this.materias);
        }

        agregarMateria(materia: Materia) {
          /**
          * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
          * se debe generar un nuevo array !!!!.
          */
          this.materias = [...this.materias, materia];
          this.refresh();
        }

        loadDummyData() {
          this.materias = DUMMY_DATA;
          this.refresh();
        }

}
