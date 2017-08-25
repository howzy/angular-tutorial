import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationsDemoComponent } from './animations-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AnimationsDemoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AnimationsDemoRoutingModule { 
  
}