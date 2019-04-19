import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceTestComponent } from './copy/price-test/price-test.component';
import { TablaComponent } from './copy/tabla/tabla.component';
import { copyRouting } from './copy/copy.routes';


import { NavbarComponent } from './navbar/navbar.component';
import { appRouting } from '../app.routes';

import { BannerComponent } from './banner/banner.component';
import { PortadaComponent } from './portada/portada.component';
import { DescripcionesComponent } from './descripciones/descripciones.component';
import { CopyComponent } from './copy/copy.component';


@NgModule({


  declarations: [

    PriceTestComponent,
    TablaComponent,
    BannerComponent,
    PortadaComponent,
    NavbarComponent,
    DescripcionesComponent,
    CopyComponent, ],

    imports: [
    CommonModule,
    appRouting,
    copyRouting
  ],

  exports: [
    PriceTestComponent,
    TablaComponent,
    BannerComponent,
    PortadaComponent,
    NavbarComponent,
    DescripcionesComponent,
    CopyComponent,

  ]

})
export class ComponentsModule { }
