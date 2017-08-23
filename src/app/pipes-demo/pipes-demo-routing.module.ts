import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PipesDemoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PipesDemoRoutingModule { 
  
}