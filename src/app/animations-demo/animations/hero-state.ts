import { trigger, state, style, animate, transition } from '@angular/animations';

export const heroState = trigger('heroState', [
  state('inactive', style({
    backgroundColor: '#eee',
    transform: 'scale(1)'
  })),
  state('active', style({
    backgroundColor: '#cfd8dc',
    transform: 'scale(1.1)'
  })),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out'))
]);
