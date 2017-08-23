import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesDemoComponent } from './pipes-demo.component';
import { PipesDemoRoutingModule } from './pipes-demo-routing.module';
import { ExponentialStrengthPipe } from '../pipe/exponential-strength.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesDemoRoutingModule
  ],
  declarations: [
    PipesDemoComponent,
    ExponentialStrengthPipe
  ]
})
export class PipesDemoModule { }
