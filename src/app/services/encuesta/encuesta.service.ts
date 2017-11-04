import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Encuesta } from '../../model/encuesta'

@Injectable()
export class EncuestaService {
    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    postEncuesta(encuesta: Encuesta) {
        const body = {legajo: encuesta.legajo, encuesta: JSON.stringify(encuesta.materias)}
        const req = this.http.post('http://localhost:8000/api/encuesta', body);
        req.subscribe();
    }
}
