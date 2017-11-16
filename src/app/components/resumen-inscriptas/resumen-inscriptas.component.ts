import { Component, OnInit, Input, Output, ChangeDetectionStrategy  } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Encuesta } from '../../model/encuesta';
import { MateriaEncuesta } from '../../model/materiaEncuesta';
import { MateriasAcursarService } from '../../services/materias-acursar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Resumen-inscriptas',
  templateUrl: './resumen-inscriptas.component.html',
  styleUrls: ['./resumen-inscriptas.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumenInscriptasComponent implements OnInit {
    @Input() seleccion;

    constructor(private router: Router, public encuestaService: MateriasAcursarService, public snackBar: MatSnackBar) {

    }

    enviarEncuesta(legajo) {
        this.encuestaService.postEncuesta();
        this.snackBar.open("Encuesta enviada", this.cancelarEnvioEncuesta(), {
        duration: 3000,
        });
        // this.router.navigateByUrl('/homepage');
    }

    armarEncuesta(){
        var encuesta: MateriaEncuesta[] = [];
        for(var i = 0; i < this.seleccion.length; i++){
            var materia = this.seleccion[i];
            var comision = this.extraerComisionElegida(this.seleccion[i]);
            var materiaEncuesta = new MateriaEncuesta(materia, comision);
            encuesta = [...encuesta, materiaEncuesta];
        }

        return encuesta;
    }

    private extraerComisionElegida(materia){
        return materia['comisiones'].filter(comision => comision['nombre'] == materia['comisionElegida'])[0];
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
