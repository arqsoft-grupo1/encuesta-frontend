export class Materia {
   constructor(
      public id: number,
      public orden: number,
      public nombre: string,
      public comisiones: string[],
      public aprobada: boolean
  ) {}
}
