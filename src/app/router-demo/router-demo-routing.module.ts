import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterDemoComponent } from './router-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routerDemoRoutes: Routes = [
  {
    path: '',
    component: RouterDemoComponent,
    children: [
      {
        path: 'heroes',
        loadChildren: 'app/router-demo/heroes/heroes.module#HeroesModule'
      },
      {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routerDemoRoutes)
  ],
  exports: [RouterModule]
})
export class RouterDemoRoutingModule { 
  
}