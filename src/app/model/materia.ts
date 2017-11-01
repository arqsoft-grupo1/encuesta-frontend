export class Materia {
   constructor(
      public orden: string,
      public nombre: string,
      public comisiones: string[],
      public aprobada: boolean
  ) {}

  getOrden() {
      return this.orden;
  }

  getNombre() {
      return this.nombre;
  }

  getComisiones() {
      return this.comisiones;
  }
}
