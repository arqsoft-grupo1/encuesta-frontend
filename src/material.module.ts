import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSelectModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatRadioModule,
  MatGridListModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule
  ]
})
export class MaterialModule {}
