import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name = "Jeremy Jacala";
  jobTitle = "Senior Web Developer";
  email = "jeremy.jacala@gmail.com";
  phone = "+639178926017"

  constructor() { }

  ngOnInit(): void {
    var typed = new Typed('.typed-tech-stack', { strings: ["C#, .Net Core 5, Java, Python, Angular, AngularJS, MsSQL, MySQL, MongoDB, Git, TortoiseSVN, Atlassian Bamboo, IIS, IBM WebSphere, AWS"], typeSpeed: 50 })
  }

}
