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
import { DialogOverviewExampleDialog } from './components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEncuestaComponent } from './components/detalle-encuesta/detalle-encuesta.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VistaDirectorComponent } from './components/vista-director/vista-director.component';
import { ChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
    {path: 'homepage',
     component: HomepageComponent},
    {path: 'encuesta/:token',
     component: DetalleEncuestaComponent},
     {path: '',
      redirectTo: '/homepage',
      pathMatch: 'full'
  },
  {path: 'vista-director',
   component: VistaDirectorComponent},
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
    DialogOverviewExampleDialog,
    DetalleEncuestaComponent,
    VistaDirectorComponent,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    ChartsModule,
    RouterModule.forRoot(
        appRoutes
    )
  ],
  providers: [OfertaService, EncuestaService, UtilidadesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
