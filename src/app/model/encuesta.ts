import { MateriaEncuesta } from './materiaEncuesta'

export class Encuesta {
   constructor(
      public legajo: number,
      public materias: MateriaEncuesta[]
  ) {}
}
