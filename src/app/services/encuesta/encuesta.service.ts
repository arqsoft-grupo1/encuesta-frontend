import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Encuesta } from '../../model/encuesta'

@Injectable()
export class EncuestaService {

    legajo;
    token;

    setLegajo(legajo){
        this.legajo = legajo;
    }

    setToken(token) {
        this.token = token;
    }

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    postEncuesta(encuesta: Encuesta) {
        const body = {legajo: this.token + "", encuesta: JSON.stringify(encuesta.materias)}
        console.log(body);
        const req = this.http.post('http://localhost:8000/api/encuesta', body);
        req.subscribe();
    }
}
