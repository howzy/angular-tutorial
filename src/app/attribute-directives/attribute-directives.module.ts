import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AttributeDirectivesComponent } from './attribute-directives.component';
import { AttributeDirectivesRoutingModule } from './attribute-directives-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AttributeDirectivesRoutingModule
  ],
  declarations: [AttributeDirectivesComponent]
})
export class AttributeDirectivesModule { }
