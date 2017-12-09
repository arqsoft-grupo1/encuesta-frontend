import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Oferta } from '../../model/oferta'
import { Materia } from '../../model/materia'

interface ItemsResponse {
  results: string[];
}

@Injectable()
export class OfertaService {
    ruta = 'http://localhost:8000/api/oferta';
    // prueba;
    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    sendMailToken(mail) {
        console.log(mail);
        var ruta_tmp = this.ruta + '/token/' + mail;
        console.log(ruta_tmp);
        return this.http.get(ruta_tmp).subscribe();
    }

    getOferta(token) {
            // ruta heroku
            // return this.http.get<Oferta>('https://arq-sof-encuesta-backend.herokuapp.com/api/oferta/' + email);
            return this.http.get<Oferta>(this.ruta + token);
    }

}
