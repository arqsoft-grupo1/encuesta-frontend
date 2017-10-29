export class Materia {
   constructor(
      public orden: string,
      public nombre: string,
  ) {}

  getOrden() {
      return this.orden;
  }

  getNombre() {
      return this.nombre;
  }
}
