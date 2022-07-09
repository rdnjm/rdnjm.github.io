import { Component, Input, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() text: any;

  constructor() { }

  ngOnInit(): void {
  }

}
