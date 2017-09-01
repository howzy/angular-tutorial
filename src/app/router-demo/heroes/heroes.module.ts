import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesRoutingModule } from './heroes-routing.modult';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent
  ],
  providers: [HeroService]
})
export class HeroesModule { }
