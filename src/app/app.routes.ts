import { RouterModule, Routes } from '@angular/router';
import { PagesTokenComponent } from './pages-token/pages-token.component';
import { PagesTokenRoutes } from './pages-token/token.routes';
import { ProtegerRutasGuard } from './guards/proteger-rutas.guard';
import { RegisterGlobalComponent } from './register-global/register-global.component';
import { LoginArtistComponent } from './login-artist/login-artist.component';
import { PagesComponent } from './pages-landing/pages.component';
import { PagesRoutes } from './pages-landing/pages.routes';
import { AppComponent } from './app.component';




const routes: Routes = [
    { path: '', component: PagesComponent , children: PagesRoutes },
    { path: 'register', component: RegisterGlobalComponent },
    { path: 'loginArtist', component: LoginArtistComponent },
    { path: 'fan', component: PagesTokenComponent , canActivate: [ ProtegerRutasGuard ] , children: PagesTokenRoutes },
    { path: '**', redirectTo : 'NoPageFoundComponent' },

];

export const appRouting = RouterModule.forRoot( routes , { useHash: true } );
