
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: TemplateDrivenFormsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule { 
  
}