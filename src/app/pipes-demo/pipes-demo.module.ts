import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PipesDemoComponent } from './pipes-demo.component';
import { PipesDemoRoutingModule } from './pipes-demo-routing.module';
import { ExponentialStrengthPipe } from '../pipe/exponential-strength.pipe';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from '../pipe/flying-heroes.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PipesDemoRoutingModule
  ],
  declarations: [
    PipesDemoComponent,
    ExponentialStrengthPipe,
    FlyingHeroesComponent,
    FlyingHeroesPipe
  ]
})
export class PipesDemoModule { }
