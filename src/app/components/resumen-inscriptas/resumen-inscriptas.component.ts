import { Component, OnInit, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'Resumen-inscriptas',
  templateUrl: './resumen-inscriptas.component.html',
  styleUrls: ['./resumen-inscriptas.component.css']
})
export class ResumenInscriptasComponent implements OnInit {
    @Input() seleccion;

  constructor(public snackBar: MatSnackBar) {

  }

  openSnackBar() {
    this.snackBar.open("Encuesta enviada", this.cancelarEnvioEncuesta(), {
      duration: 3000,
    });
  }

  cancelarEnvioEncuesta(){
      return "Cancelar";
  }

  borrarMateriaResumen(materia){
      this.snackBar.open("Materia Eliminada", this.cancelarMateriaBorrada(), {
        duration: 3000,
      });
      this.seleccion.splice(this.seleccion.indexOf(materia), 1);
  }

  cancelarMateriaBorrada(){
      return "Cancelar";
  }

  ngOnInit() {
  }

}
