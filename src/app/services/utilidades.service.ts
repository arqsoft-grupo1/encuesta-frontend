import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Director } from '../model/director'

@Injectable()
export class UtilidadesService {

  constructor(private http: HttpClient) { }

  director;

  getDirector(email) {
      return this.http.get<Director>('http://localhost:8000/api/director/' + email);
  }

  getEncuestasRespondidas(){
      return this.http.get('http://localhost:8000/api/encuesta/porcentaje_respuestas');
  }

  getMateriasOrdenadasPorSaturacion(){
      return this.http.get('http://localhost:8000/api/materia/');
  }

}