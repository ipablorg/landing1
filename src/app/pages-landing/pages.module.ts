import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*   LANDING PAGES  */
import { NavbarComponent } from './navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

/* EXTERNAL COMPONENTS MODULE */
import { ComponentsModule } from '../components/components.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { pagesRouting } from './pages.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';



@NgModule({
  declarations: [ NavbarComponent,
                  ContactoComponent ,
                  HomeComponent,
                  LoginComponent,
                  RegisterComponent,
                  ServiciosComponent,
                  PreciosComponent,
                  NoticiasComponent,
                  EventosComponent, ],

    imports: [
    ComponentsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    pagesRouting,


  ],

    exports: [
    NavbarComponent,
    ComponentsModule,
  ]
})


export class PagesModule { }
