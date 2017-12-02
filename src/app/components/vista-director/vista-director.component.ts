import { Component, OnInit } from '@angular/core';
import { UtilidadesService } from '../../services/utilidades.service';

@Component({
  selector: 'vista-director',
  templateUrl: './vista-director.component.html',
  styleUrls: ['./vista-director.component.css']
})
export class VistaDirectorComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels:string[] = ['Encuestas completadas', 'Encuestas no completadas'];
    // public doughnutChartData:number[] = [20, 80];
    public doughnutChartData:number[] = [];
    public doughnutChartType:string = 'doughnut';

    public dibujarGrafico = false;

    constructor(private utilidadesService: UtilidadesService){
        this.getEncuestasRespondidas();

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

}
