import { Pipe, PipeTransform } from '@angular/core';

import { Flyer } from '../pipes-demo/model/heroes';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]): any {
    return allHeroes.filter(hero => hero.canFly);
  }

}

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
