import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsDemoComponent } from './animations-demo.component';
import { AnimationsDemoRoutingModule }  from './animations-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnimationsDemoRoutingModule
  ],
  declarations: [AnimationsDemoComponent]
})
export class AnimationsDemoModule { }
