import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages-landing/pages.component';
import { appRouting } from './app.routes';
import { PagesModule } from './pages-landing/pages.module';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesTokenModule } from './pages-token/pages-token.module';
import { LoginArtistComponent } from './login-artist/login-artist.component';
import { RegisterGlobalComponent } from './register-global/register-global.component';






@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginArtistComponent,
    RegisterGlobalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting,
    ComponentsModule,
    FormsModule,
    PagesModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesTokenModule,

  ],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
