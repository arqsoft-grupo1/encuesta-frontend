import {Component, ViewChild} from '@angular/core';
// import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OfertaService } from "../../services/encuesta/oferta.service";
import { Oferta } from "../../model/oferta";
// import { MatExpansionModule } from '@angular/material';

@Component({
  selector: 'Encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {
    displayedColumns = ['id', 'nombre', 'orden'];
    dataSource: ExampleDataSource | null;
    opciones = [
                    {value: 'yacurse', viewValue: 'Ya curse'},
                    {value: 'todaviano', viewValue: 'Todavia no'},
                    {value: 'Elanoproximo', viewValue: 'Proximamente'}
                ];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private ofertaService: OfertaService) { }

    // ngOnInit() {
    // //this.dataSource = new ExampleDataSource(data, this.paginator);
    //     this.ofertaService.getOferta().subscribe(
    //         oferta => {
    //             // console.log(oferta['oferta']);
    //             this.dataSource = new ExampleDataSource(oferta['oferta'], this.paginator);
    //         }
    //     );
    // }

}

export class ExampleDataSource extends DataSource<any> {
  dataChange: BehaviorSubject<Oferta[]> = new BehaviorSubject<Oferta[]>([]);

     constructor(public data, private _paginator: MatPaginator) {
       super();
     }

     connect(): Observable<Oferta[]> {
       const displayDataChanges = [
         this.dataChange,
         this._paginator.page,
       ];

       return Observable.merge(...displayDataChanges).map(() => {
         const data = this.data.slice();

         // Grab the page's slice of data.
         const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
         return data.splice(startIndex, this._paginator.pageSize);
       });
     }

     disconnect() {}
   }
