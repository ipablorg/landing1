import { RouterModule, Routes } from '@angular/router';
import { PriceTestComponent } from './price-test/price-test.component';
import { TablaComponent } from './tabla/tabla.component';

export const copyRoutes: Routes = [
    { path: 'routePath', component: TablaComponent },
    { path: 'trending', component: TablaComponent },
    { path: 'priceTest', component: PriceTestComponent  },
    { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const copyRouting = RouterModule.forChild( copyRoutes );
