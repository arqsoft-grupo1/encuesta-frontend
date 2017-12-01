import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilidadesService } from '../../services/utilidades.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Director } from '../../model/director'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'Homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    email: any;
    legajo: number;

    esDirector = false;



    // animal: string;
    // name: string;

    constructor(private router: Router, private utilidadesService: UtilidadesService, private http: HttpClient, public dialog: MatDialog) { }

    ngOnInit() {
    }

    // openDialog(): void {
    //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //     width: '250px',
    //     data: { name: this.name, animal: this.animal }
    //   });
    //
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.animal = result;
    //   });
    // }

    login(){
        this.utilidadesService.getDirector(this.email).subscribe(
            data => {
                this.esDirector = true;
            },
            err => {
                this.router.navigate(['/encuesta/' + this.legajo + '/' + this.email]);
                console.log("No hay director")
            }
      );
    }
}

    // @Component({
    //   selector: 'dialog-overview-example-dialog',
    //   templateUrl: 'dialog-overview-example-dialog.html',
    // })
    // export class DialogOverviewExampleDialog {
    //
    //   constructor(
    //     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    //     @Inject(MAT_DIALOG_DATA) public data: any) { }
    //
    //   onNoClick(): void {
    //     this.dialogRef.close();
    //   }
// }
