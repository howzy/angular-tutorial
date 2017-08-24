import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { HEROES } from '../model/heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) return;
    let hero = {
      name,
      canFly: this.canFly
    }
    if (this.mutate) {

    }
  }

  reset() {
    this.heroes = HEROES.
  }

  goBack() {
    this.location.back();
  }

}
