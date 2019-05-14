import { RouterModule, Routes } from '@angular/router';
import { PriceTestComponent } from './price-test/price-test.component';
import { TrendingComponent } from './trending/trending.component';




export const Div2routes: Routes = [

    { path: '', redirectTo: '/litmoi/home/trending', pathMatch: 'full'},
    { path: 'trending', component: TrendingComponent },
    { path: 'price', component: PriceTestComponent },


];

export const Div2Routing = RouterModule.forChild(Div2routes);
