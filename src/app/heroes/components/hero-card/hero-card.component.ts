import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

  @Input()
  hero!:Hero;

  ngOnInit(): void {
    if(!this.hero){
      throw new Error('hero property is required.');
    }
  }
}
