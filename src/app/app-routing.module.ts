import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'attribute-directives', loadChildren: 'app/attribute-directives/attribute-directives.module#AttributeDirectivesModule' },
  { path: 'structural-directives', loadChildren: 'app/structural-directives/structural-directives.module#StructuralDirectivesModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}