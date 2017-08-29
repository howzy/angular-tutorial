import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ReactiveFormsDemoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ReactiveFormsDemoRoutingModule { 
  
}