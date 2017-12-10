import { Materia } from './materia'

export class Oferta {
   constructor(
      public materias: Materia[],
  ) {}

  getMaterias() {
      return this.materias;
  }
}
