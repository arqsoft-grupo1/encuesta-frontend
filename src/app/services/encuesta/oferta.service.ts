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
    prueba;
    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    getOferta(email) {
            // ruta heroku
            // return this.http.get<Oferta>('https://arq-sof-encuesta-backend.herokuapp.com/api/oferta/' + email);
            return this.http.get<Oferta>('http://localhost:8000/api/oferta/' + email);
    }

}
