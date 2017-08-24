import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PipesDemoComponent },
      { path: 'flying-heroes', component: FlyingHeroesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PipesDemoRoutingModule { 
  
}