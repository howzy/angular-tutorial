import { Component, OnInit } from '@angular/core';

import { Hero } from './model/hero';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;
  model = new Hero(18, 'Dr IQ', this.powers[3], 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '','');
  }

}
