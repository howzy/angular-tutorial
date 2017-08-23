import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AttributeDirectivesComponent } from './attribute-directives.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AttributeDirectivesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AttributeDirectivesRoutingModule { 
  
}
