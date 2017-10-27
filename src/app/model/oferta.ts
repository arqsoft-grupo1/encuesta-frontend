export class Oferta {
   constructor(
      public id: string,
      public materias: Materia[],
      public nombre: string,
      public orden: string,
  ) {}
}
