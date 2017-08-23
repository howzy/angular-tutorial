import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { StructuralDirectivesRoutingModule } from './structural-directives-routing.module';
import { StructuralDirectivesComponent } from './structural-directives.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StructuralDirectivesRoutingModule
  ],
  declarations: [StructuralDirectivesComponent]
})
export class StructuralDirectivesModule { }
