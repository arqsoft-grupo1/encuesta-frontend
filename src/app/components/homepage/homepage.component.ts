import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    email: any;
    legajo: number;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    login(){
        // this.router.navigateByUrl('/encuesta/' + this.legajo);

        this.router.navigate(['/encuesta/' + this.legajo + '/' + this.email]);
    }

}
