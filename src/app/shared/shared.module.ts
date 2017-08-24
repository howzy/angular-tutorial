import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
