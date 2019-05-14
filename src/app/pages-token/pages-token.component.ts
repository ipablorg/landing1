import { Component, OnInit } from '@angular/core';

declare function init_appjs();
declare function init_chart();
declare function init_jvectormap122();
declare function init_jvectorWorld();
declare function init_demoDashboard();
declare function init_demoCharts();

@Component({
  selector: 'app-pages-token',
  templateUrl: './pages-token.component.html',
})
export class PagesTokenComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {

    init_appjs();
    init_chart();
    init_jvectormap122();
    init_jvectorWorld();
    init_demoDashboard();
    init_demoCharts();

 }

}
