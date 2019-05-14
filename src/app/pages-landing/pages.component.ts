import { Component, OnInit } from '@angular/core';

declare function init_appjs();
declare function init_chart();
declare function init_jvectormap122();
declare function init_jvectorWorld();
declare function init_demoDashboard();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_appjs();
    init_chart();
    init_jvectormap122();
    init_jvectormap122();
    init_jvectorWorld();
    init_demoDashboard();
  }

}
