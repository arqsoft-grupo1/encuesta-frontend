import { Component, OnInit, Input } from '@angular/core';
import { UtilidadesService } from '../../services/utilidades.service';

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

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
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
