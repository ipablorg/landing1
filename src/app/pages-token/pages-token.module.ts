import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRecordsComponent } from './fan/artist-records/artist-records.component';
import { DashboarFanComponent } from './fan/dashboar-fan/dashboar-fan.component';
import { FanBrowseComponent } from './fan/fan-browse/fan-browse.component';
import { FanHomeComponent } from './fan/fan-home/fan-home.component';
import { FanProfileComponent } from './fan/fan-profile/fan-profile.component';
import { NavBarFanComponent } from './fan/nav-bar-fan/nav-bar-fan.component';
import { PagesTokenComponent } from './pages-token.component';
import { pagesTokenRouting } from './token.routes';



@NgModule({
  declarations: [
    ArtistRecordsComponent,
    DashboarFanComponent,
    FanBrowseComponent,
    FanHomeComponent,
    FanProfileComponent,
    NavBarFanComponent,
    PagesTokenComponent

  ],
  imports: [
    CommonModule,
    pagesTokenRouting
  ]
})
export class PagesTokenModule { }
