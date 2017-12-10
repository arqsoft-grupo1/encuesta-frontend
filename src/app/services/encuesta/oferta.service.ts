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
        var ruta_tmp = this.ruta + '/token/' + mail;
        // return this.http.get(ruta_tmp).subscribe();
        return this.http.get(ruta_tmp);
    }

    getOferta(token) {
            // ruta heroku
            // return this.http.get<Oferta>('https://arq-sof-encuesta-backend.herokuapp.com/api/oferta/' + email);
            var ruta_tmp = this.ruta + '/token/';
            return this.http.get<Oferta>(this.ruta + "/" + token);
    }

}
