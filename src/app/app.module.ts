import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { PortadaComponent } from './components/portada/portada.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DescripcionesComponent } from './components/descripciones/descripciones.component';
import { CopyComponent } from './components/copy/copy.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BannerComponent,
    PortadaComponent,
    TablaComponent,
    DescripcionesComponent,
    CopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
