import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  name = "I am Jeremy Jacala";

  constructor() { }

  ngOnInit(): void {
    var typed = new Typed('.typed', { strings: ["Developer", "Freelancer"], loop: true, typeSpeed: 100 })
  }

}
