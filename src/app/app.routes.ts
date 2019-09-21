import { RouterModule, Routes } from '@angular/router';
import { PagesRoutes } from './pages-landing/pages.routes';
import { PagesComponent } from './pages-landing/pages.component';
import { PagesTokenComponent } from './pages-token/pages-token.component';
import { PagesTokenRoutes } from './pages-token/token.routes';
import { ProtegerRutasGuard } from './guards/proteger-rutas.guard';
import { LoginComponent } from './pages-landing/login/login.component';
import { RegisterComponent } from './pages-landing/register/register.component';


const routes: Routes = [

    { path: 'litmoi', component: PagesComponent , children: PagesRoutes },
    { path: 'fan', component: PagesTokenComponent , canActivate: [ ProtegerRutasGuard ] , children: PagesTokenRoutes },
    { path: '**', redirectTo : 'NoPageFoundComponent' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

];

export const appRouting = RouterModule.forRoot( routes , { useHash: true } );
