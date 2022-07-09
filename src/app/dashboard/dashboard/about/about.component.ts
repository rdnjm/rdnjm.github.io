import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  workStarted = new Date("2016"); 
  email = "jeremy.jacala@gmail.com"
  aboutMe = { 
    "header" : "About Me"
    , "headerStyle" : "title-center"
    , "text" : [{
        "class" : "content-text-white"
        , "strings" : `I am Jeremy, a Senior Web Developer from the Philippines with ${(new Date().getFullYear() - this.workStarted.getFullYear())} years of wide range experiences in the IT industry. I started my career as an intern in one of the known ICT Distributor in the Philippines, and became knowledgeable in IT Infrastructure. I had to leave that path, and pursued my passion, which is software development.`
        }, 
        {
          "class" : "content-text-white"
          , "strings" : "Diligence, integrity, learning are the principles I uphold and what fuels my passion. I like to work on things where I can learn new things and be challenged."
        },  
        {
          "class" : "content-text-white"
          , "strings" : `I am open for new opportunities, whether it be freelance or full-time work. Feel free to contact me at ${this.email}`
          , "hasLink" : true
          , "url" : `mailto: ${this.email}`
          , "urlLabel" : this.email
          , "urlClass" : "email-link"
        }, 
      ]
  };
  techStack = {
    "header" : "Tech Stack"
    , "headerStyle" : "title-center"
    , "text" : [{
        "class" : "content-text-white"
        , "strings": "C#, .Net Core 5, Java, Python, Angular, AngularJS, MsSQL, MySQL, MongoDB, Git, TortoiseSVN, Atlassian Bamboo, IIS, IBM WebSphere, AWS"
      }]
  }

  constructor() { }

  ngOnInit(): void {
 }

}
