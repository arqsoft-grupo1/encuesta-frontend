import { Comision } from './comision'
import { Materia } from './materia'

export class MateriaEncuesta {
   constructor(
      public materia: Materia,
      public comisionElegida: Comision
  ) {   
  }
}
