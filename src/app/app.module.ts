import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { OfertaService } from './services/encuesta/oferta.service'
import { MatInputModule } from '@angular/material';
import { ExpansionComponent } from './components/encuesta/expansion/expansion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DatePipe } from '@angular/common';
import { ResumenInscriptasComponent } from './components/resumen-inscriptas/resumen-inscriptas.component';
import { MatListModule } from '@angular/material';
import { ListaOfertaComponent } from './components/encuesta/lista-oferta/lista-oferta.component';
import { MateriasAcursarService } from './services/materias-acursar.service';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
    ExpansionComponent,
    HeaderComponent,
    ResumenInscriptasComponent,
    ListaOfertaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ],
  providers: [OfertaService, MateriasAcursarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
