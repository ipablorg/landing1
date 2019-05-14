import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styles: []
})
export class TrendingComponent implements OnInit {

  date = new Date;

  constructor() { }

  ngOnInit() {
  }

}
