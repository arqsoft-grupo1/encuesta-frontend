import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Oferta } from '../../model/oferta'

@Injectable()
export class OfertaService {
   constructor(private http: Http) {
   }

   getOferta(): Observable<Object[]> {
      return this.http.get("http://localhost:8000/api/oferta")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
   // getOferta() {
   //      return this.http.get<Oferta>('http://localhost:8000/api/oferta');
   //  }
}
