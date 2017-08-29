import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';
import { ReactiveFormsDemoRoutingModule } from './reactive-forms-demo-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsDemoRoutingModule
  ],
  declarations: [ReactiveFormsDemoComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class ReactiveFormsDemoModule { }
