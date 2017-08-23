import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: StructuralDirectivesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StructuralDirectivesRoutingModule { 
  
}