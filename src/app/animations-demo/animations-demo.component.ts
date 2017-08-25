import { Component, OnInit } from '@angular/core';

import { heroState } from './animations/hero-state';
import { flyInOut } from './animations/fly-in-out';

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.css'],
  animations: [
    heroState,
    flyInOut
  ]
})
export class AnimationsDemoComponent implements OnInit {
  flyInOut: string = 'in';
  hero = {
    name: 'Windstorm',
    state: 'inactive',
    toggleState: function() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }
  }

  toggleFlyInOut() {
    this.flyInOut = this.flyInOut == 'in' ? '' : 'in';
  }

  constructor() { }

  ngOnInit() {
  }

}
