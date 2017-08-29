import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormValidationComponent } from './form-validation.component';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { ForbiddenValidatorDirective } from '../directive/forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormValidationRoutingModule
  ],
  declarations: [
    FormValidationComponent,
    ForbiddenValidatorDirective
  ]
})
export class FormValidationModule { }
