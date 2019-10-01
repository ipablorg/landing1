import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { AssetsComponent } from './assets/assets.component';
import { AudioComponent } from './assets/audio/audio.component';

export const PagesRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent , },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'eventos', component: EventosComponent  },
    { path: 'contacto', component: ContactoComponent  },
    { path: 'assets', component: AssetsComponent },
    { path: 'audio', component: AudioComponent },



];

export const pagesRouting = RouterModule.forChild(PagesRoutes);
