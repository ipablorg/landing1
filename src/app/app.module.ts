import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


/* Rutas generales */
import { appRouting } from './app.routes';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { WhitePaperComponent } from './pages/white-paper/white-paper.component';
import { SmartContractComponent } from './pages/smart-contract/smart-contract.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    PricesComponent,
    WhitePaperComponent,
    SmartContractComponent
  ],
  imports: [

    BrowserModule,
    appRouting,
    ComponentsModule


  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
