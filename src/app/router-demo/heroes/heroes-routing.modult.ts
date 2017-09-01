import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HeroListComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
  
}