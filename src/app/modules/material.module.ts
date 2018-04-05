//  requires theme import from css/styles.scss
//  theme is pre-built from material team and does not follow AHS theme, so it will need to be modified before it can be used. 

//  exmaples and doc
//  https://material.angular.io/
//  https://github.com/angular/material2

import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule
} from '@angular/material';

import 'hammerjs';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,  //requires hammerjs
    MatSliderModule,  //requires hammerjs
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,  //requires hammerjs
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})

export class MaterialModule { }
