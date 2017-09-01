import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterDemoComponent } from './router-demo.component';
import { RouterDemoRoutingModule } from './router-demo-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterDemoRoutingModule
  ],
  declarations: [RouterDemoComponent, NotFoundComponent]
})
export class RouterDemoModule { }
