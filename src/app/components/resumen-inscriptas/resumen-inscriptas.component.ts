import { Component, OnInit, Input, Output, ChangeDetectionStrategy  } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MateriasAcursarService } from '../../services/materias-acursar.service';

@Component({
  selector: 'Resumen-inscriptas',
  templateUrl: './resumen-inscriptas.component.html',
  styleUrls: ['./resumen-inscriptas.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumenInscriptasComponent implements OnInit {
    @Input() seleccion;

  constructor(private materiaACursarService: MateriasAcursarService, public snackBar: MatSnackBar) {

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
        this.materiaACursarService.borrarMateria(materia);
  }

  cancelarMateriaBorrada(){
      return "Cancelar";
  }

  ngOnInit() {
    //   console.log("Prueba" + this.seleccion)
  }

}
