import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilidadesService } from '../../services/utilidades.service';
import { OfertaService } from '../../services/encuesta/oferta.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Director } from '../../model/director'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'Homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    email: any;
    legajo: number;

    esDirector = false;

    director;

    passwordInput: string;

    // animal: string;

    value: string;

    constructor(private router: Router, private ofertaService: OfertaService ,private utilidadesService: UtilidadesService, private http: HttpClient, public dialog: MatDialog, public snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    openDialog(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {animal: this.passwordInput }
      });

      dialogRef.afterClosed().subscribe(result => {
          if(result == this.director['password']){
            //   this.router.navigate(['/vista-director/' + this.director.password], { queryParams: this.director.password, skipLocationChange: true});
              this.router.navigate(['/vista-director/'], { queryParams: {password: this.director.password}, skipLocationChange: true});
          } else {
              this.snackBar.open("Contraseña incorrecta", "", {
              duration: 3000,
              });
          }
        // console.log('The dialog was closed');
      });
    }

    login(){
        this.utilidadesService.getDirector(this.email).subscribe(
            data => {
                this.esDirector = true;
                this.director = data;
                this.openDialog();
                // this.router.navigate(['/vista-director/']);
            },
            err => {

                //  console.log(this.email);
                this.ofertaService.sendMailToken(this.email);
                this.email = '';
                this.snackBar.open('URL de la encuesta, enviada al mail', '', {duration: 3000});
                // this.router.navigate(['/encuesta/' + this.legajo + '/' + this.email]);
            }
      );
    }
}

    @Component({
          selector: 'dialog-overview-example-dialog',
          templateUrl: 'director-dialog.html',
    })
    export class DialogOverviewExampleDialog {

      constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

      onNoClick(): void {
        this.dialogRef.close();
      }
}
