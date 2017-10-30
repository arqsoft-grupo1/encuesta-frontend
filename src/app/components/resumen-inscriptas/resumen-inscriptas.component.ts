import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Resumen-inscriptas',
  templateUrl: './resumen-inscriptas.component.html',
  styleUrls: ['./resumen-inscriptas.component.css']
})
export class ResumenInscriptasComponent implements OnInit {
    seleccion_materias = [
      {nombre: 'Introduccion a la programacion', comision: 'Comision 1 ', horario: 'martes 19 a 22, viernes 18 a 21'},
      {nombre: 'Introduccion a base de datos', comision: 'Comision 2 ',  horario: 'martes 19 a 22, viernes 18 a 21'},
      {nombre: 'Matematica 1', comision: 'Comision 1 ', horario: 'martes 19 a 22, viernes 18 a 21'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
