import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  materias_a_cursar = [
    {nombre: 'Introduccion a la programacion', comision: 'Comision 1 ', horario: 'martes 19 a 22, viernes 18 a 21'},
    {nombre: 'Introduccion a base de datos', comision: 'Comision 2 ',  horario: 'martes 19 a 22, viernes 18 a 21'},
    {nombre: 'Matematica 1', comision: 'Comision 1 ', horario: 'martes 19 a 22, viernes 18 a 21'}
  ];
}
