import { Component, OnInit, Input } from '@angular/core';
import { UtilidadesService } from '../../services/utilidades.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'vista-director',
  templateUrl: './vista-director.component.html',
  styleUrls: ['./vista-director.component.css']
})
export class VistaDirectorComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels:string[] = ['Encuestas completadas', 'Encuestas no completadas'];
    public doughnutChartData:number[] = [];
    public doughnutChartType:string = 'doughnut';

    public dibujarGrafico = false;

    public materiasOrdenadasPorSaturacion:any = [];

    step = 0;

    placeholderSelect = 'Seleccionar';

    color = 'primary';
    mode = 'determinate';
    value = 0;

    getHayAlgunaComisionSaturada(materia){
        for (var value of materia.comisiones) {
          if(value.inscriptos.length > 25){
              return true;
          }
        }
        return false;
    }

    getValue(comision){
        return (((comision.inscriptos.length) * 100) / comision.cupo).toFixed(2);
    }

    getColor(comision){
        if(comision.inscriptos.length > 25){
            return "warn";
        } else{
            if(comision.inscriptos.length >= 20){
                return "accent";
            }
        }
        return "primary";
    }

    getNombre(comision){
        switch(comision.nombre) {
           case "C1": {
              return 'Comision 1';
           }
           case "C2": {
              return 'Comision 2';
           }
           case "C3": {
              return 'Comision 3';
           }
           case "C4": {
                return 'Comision 4';
           }
           case "C5": {
                return 'Comision 5';
           }
           case "C6": {
                return 'Comision 6';
           }
           default: {
              return 'Comision';
           }
        }
    }

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

    getTotalInscriptos(materia){
        var n = 0;
        for (var value of materia.comisiones) {
          n += value.inscriptos.length;
        }
        return n;
    }

    constructor(private utilidadesService: UtilidadesService){
        this.getEncuestasRespondidas();
        this.getMateriasOrdenadasPorSaturacion();
    }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    ngOnInit() {
    }

    getEncuestasRespondidas(){
        var alumnosRespondieron = this.utilidadesService.getEncuestasRespondidas().subscribe(
            data => {
                this.doughnutChartData.push(data["encuestas_respondidas"]);
                this.doughnutChartData.push(data["alumnos_regulares"] - data["encuestas_respondidas"]);
                this.dibujarGrafico = true;
            }

        );
    }

    getMateriasOrdenadasPorSaturacion(){
        var alumnosRespondieron = this.utilidadesService.getMateriasOrdenadasPorSaturacion().subscribe(
            data => {
                this.materiasOrdenadasPorSaturacion = data;
                // console.log(data);
            }

        );
    }


}
