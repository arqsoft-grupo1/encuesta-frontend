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
  MatStepperModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
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
    MatStepperModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
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
    MatStepperModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
