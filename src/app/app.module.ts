import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { OfertaService } from './services/encuesta/oferta.service'
import { MatInputModule } from '@angular/material';
import { ExpansionComponent } from './components/encuesta/expansion/expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
    ExpansionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule
  ],
  providers: [OfertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
