import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'attribute-directives', loadChildren: 'app/attribute-directives/attribute-directives.module#AttributeDirectivesModule' },
  { path: 'structural-directives', loadChildren: 'app/structural-directives/structural-directives.module#StructuralDirectivesModule' },
  { path: 'pipes-demo', loadChildren: 'app/pipes-demo/pipes-demo.module#PipesDemoModule' },
  { path: 'animations-demo', loadChildren: 'app/animations-demo/animations-demo.module#AnimationsDemoModule' },
  { path: 'template-driven-forms', loadChildren: 'app/template-driven-forms/template-driven-forms.module#TemplateDrivenFormsModule' },
  { path: 'form-validation', loadChildren: 'app/form-validation/form-validation.module#FormValidationModule' },
  { path: 'reactive-forms-demo', loadChildren: 'app/reactive-forms-demo/reactive-forms-demo.module#ReactiveFormsDemoModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}