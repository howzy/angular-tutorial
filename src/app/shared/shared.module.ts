import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from '../directive/highlight.directive';
import { UnlessDirective } from '../directive/unless.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    UnlessDirective
  ],
  exports: [
    HighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
