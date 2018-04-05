import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { ReusablesComponent } from './reusables/reusables.component'


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'reusables',
    component: ReusablesComponent
  },
  {
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module#LazyModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // enableTracing: true, 
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }