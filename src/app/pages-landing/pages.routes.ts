import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { PagesComponent } from './pages.component';


export const PagesRoutes: Routes = [
    { path: '', component: PagesComponent , },

    { path: 'home', component: HomeComponent , },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'eventos', component: EventosComponent  },
    { path: 'contacto', component: ContactoComponent  },




];

export const pagesRouting = RouterModule.forChild(PagesRoutes);
