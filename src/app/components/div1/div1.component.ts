import { Component, OnInit } from '@angular/core';

declare function init_background();

@Component({
  selector: 'app-div1',
  templateUrl: './div1.component.html',
  styles: []
})
export class Div1Component implements OnInit {

  constructor() { }

  ngOnInit() {

    init_background();

  }

}
