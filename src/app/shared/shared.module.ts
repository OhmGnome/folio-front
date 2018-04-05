import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PropPipe } from '../core/pipe/prop.pipe'
import { MaterialModule } from './../modules/material.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

//IMPORTANT ONLY FOR THINGS THAT EFFECT THE LANDING PAGE BUT ARE NOT EXCLUSIVE TO IT

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    PageNotFoundComponent,
    PropPipe
  ],
  exports: [
    PageNotFoundComponent,
    PropPipe,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: []
})
export class SharedModule {}
