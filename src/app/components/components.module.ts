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
import { SubCopy1Component } from './sub-copy1/sub-copy1.component';
import { SubCopy2Component } from './sub-copy2/sub-copy2.component';
import { SubCopy3Component } from './sub-copy3/sub-copy3.component';
import { SubCopy4Component } from './sub-copy4/sub-copy4.component';


@NgModule({


  declarations: [

    PriceTestComponent,
    TablaComponent,
    BannerComponent,
    PortadaComponent,
    NavbarComponent,
    DescripcionesComponent,
    CopyComponent,
    SubCopy1Component,
    SubCopy2Component,
    SubCopy3Component,
    SubCopy4Component, ],

    imports: [
    CommonModule,
    appRouting,
    copyRouting, ],

    exports: [

    PriceTestComponent,
    TablaComponent,
    BannerComponent,
    PortadaComponent,
    NavbarComponent,
    DescripcionesComponent,
    CopyComponent,
    SubCopy1Component,
    SubCopy2Component,
    SubCopy3Component,
    SubCopy4Component,
  ]

})
export class ComponentsModule { }
