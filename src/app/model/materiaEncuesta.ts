import { Comision } from './comision'
import { Materia } from './materia'
import { EstadoMateria } from './estadosMateria'

export class MateriaEncuesta {
   constructor(
      public materia: Materia,
      public comisionElegida: Comision
  ) {
  }
}
