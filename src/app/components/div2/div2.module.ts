import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingComponent } from './trending/trending.component';
import { PriceTestComponent } from './price-test/price-test.component';
import { Div2Routing } from './div2.routes';
import { appRouting } from '../../app.routes';



@NgModule({
  declarations: [
    TrendingComponent,
    PriceTestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Div2Routing,
    appRouting
  ],
  exports: [
    TrendingComponent,
    PriceTestComponent
  ]
})
export class Div2Module { }
