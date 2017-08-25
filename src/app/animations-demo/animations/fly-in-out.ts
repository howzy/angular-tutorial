import { trigger, state, style, transition, animate } from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)'})),
  transition('void => *', [
    style({ transform: 'translateX(-100%)'}),
    animate(100)
  ]),
  transition('* => void', [
    style({ transform: 'translateX(100%)'}),
    animate(100)
  ])
])
