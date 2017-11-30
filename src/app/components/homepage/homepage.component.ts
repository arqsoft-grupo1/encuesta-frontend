import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilidadesService } from '../../services/utilidades.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Director } from '../../model/director'

@Component({
  selector: 'Homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    email: any;
    legajo: number;

    director;

    constructor(private router: Router, private utilidadesService: UtilidadesService, private http: HttpClient) { }

    ngOnInit() {
    }

    login(){
        this.utilidadesService.getDirector(this.email).subscribe(
            data => {
                console.log("SOY FIDEL");
            },
            err => {
                this.router.navigate(['/encuesta/' + this.legajo + '/' + this.email]);
                console.log("No hay director")
            }
      );
    }

}
