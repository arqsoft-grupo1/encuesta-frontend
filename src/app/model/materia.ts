export class Materia {
   constructor(
      public id: number,
      public orden: number,
      public nombre: string,
      public comisiones: string[],
      public aprobada: boolean
  ) {}

  getTotalInscriptos(){
      return 22;
  }

  // getOrden() {
  //     return this.orden;
  // }
  //
  // getNombre() {
  //     return this.nombre;
  // }
  //
  // getComisiones() {
  //   //   return this.comisiones;
  // }
}
