import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { Div2routes } from '../components/div2/div2.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';


export const PagesRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent , children: Div2routes },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'eventos', component: EventosComponent  },
    { path: 'contacto', component: ContactoComponent  },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

];

export const pagesRouting = RouterModule.forChild(PagesRoutes);
