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
import { EncuestaService } from './services/encuesta/encuesta.service';
import { UtilidadesService } from './services/utilidades.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEncuestaComponent } from './components/detalle-encuesta/detalle-encuesta.component';
import { FlexLayoutModule } from "@angular/flex-layout";

const appRoutes: Routes = [
    {path: 'homepage',
     component: HomepageComponent},
    {path: 'encuesta/:legajo/:mail',
     component: DetalleEncuestaComponent},
     {path: '',
      redirectTo: '/homepage',
      pathMatch: 'full'
     }
];

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
    ExpansionComponent,
    HeaderComponent,
    ResumenInscriptasComponent,
    ListaOfertaComponent,
    HomepageComponent,
    DetalleEncuestaComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    RouterModule.forRoot(
        appRoutes
    )
  ],
  providers: [OfertaService, EncuestaService, UtilidadesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
