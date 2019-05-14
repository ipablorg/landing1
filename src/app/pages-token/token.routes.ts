import { RouterModule, Routes } from '@angular/router';
import { ArtistRecordsComponent } from './fan/artist-records/artist-records.component';
import { FanBrowseComponent } from './fan/fan-browse/fan-browse.component';
import { FanHomeComponent } from './fan/fan-home/fan-home.component';
import { FanProfileComponent } from './fan/fan-profile/fan-profile.component';





export const PagesTokenRoutes: Routes = [

    { path: '', component: FanHomeComponent },
    { path: 'fanHome', component: FanHomeComponent },
    { path: 'artistRecords', component: ArtistRecordsComponent },
    { path: 'fanBrowse', component: FanBrowseComponent },
    { path: 'fanProfile', component: FanProfileComponent },





];

export const pagesTokenRouting = RouterModule.forChild(PagesTokenRoutes);
