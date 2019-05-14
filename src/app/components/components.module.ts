import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import { Div3Component } from './div3/div3.component';
import { Div4Component } from './div4/div4.component';
import { Div2Module } from './div2/div2.module';
import { appRouting } from '../app.routes';
import { Div5Component } from './div5/div5.component';
import { Div6Component } from './div6/div6.component';
import { Div7Component } from './div7/div7.component';
import { Div8Component } from './div8/div8.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    Div1Component,
    Div2Component,
    Div3Component,
    Div4Component,
    Div5Component,
    Div6Component,
    Div7Component,
    Div8Component,
    FaqComponent


  ],
  imports: [
    BrowserModule,
    CommonModule,
    Div2Module,
    appRouting

  ],

   exports: [

    Div1Component,
    Div2Component,
    Div3Component,
    Div4Component,
    Div5Component,
    Div6Component,
    Div7Component,
    Div8Component,
    FaqComponent


   ],
})
export class ComponentsModule { }
