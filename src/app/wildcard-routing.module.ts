import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: '**',
              component: PageNotFoundComponent
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})
export class WildcardRoutingModule { }