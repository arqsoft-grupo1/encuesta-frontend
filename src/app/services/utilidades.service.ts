import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Director } from '../model/director'

@Injectable()
export class UtilidadesService {

  constructor(private http: HttpClient) { }

  director;

  getDirector(email) {
      return this.http.get<Director>('https://arq-sof-encuesta-backend.herokuapp.com/api/director/' + email);
  }

  getEncuestasRespondidas(){
      return this.http.get('http://arq-sof-encuesta-backend.herokuapp.com/api/encuesta/porcentaje_respuestas');
  }

  getMateriasOrdenadasPorSaturacion(){
      return this.http.get('https://arq-sof-encuesta-backend.herokuapp.com/api/materia/');
  }

}
