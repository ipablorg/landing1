import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { WhitePaperComponent } from './pages/white-paper/white-paper.component';
import { SmartContractComponent } from './pages/smart-contract/smart-contract.component';
import { copyRoutes } from './components/copy/copy.routes';

const routes: Routes = [
    { path: 'home', component: HomeComponent , children: copyRoutes },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'prices', component: PricesComponent  },
    { path: 'white', component: WhitePaperComponent },
    { path: 'smart', component: SmartContractComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot( routes , { useHash: true } );
