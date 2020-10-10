import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppResolveService } from './app-resolve.service';
import { DownloadComponent } from './download/download.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { SupportComponent } from './support/support.component';

const appRoutes: Routes = [
  { path: '',
   component: HomeComponent,
   pathMatch: 'full',
    resolve:{
      pageContent: AppResolveService,
      pageSeo: AppResolveService
     }
 },
  { path: 'about-pogo-lt', component: AboutComponent,
  resolve:{
    pageContent: AppResolveService,
   }
},
{ path: 'support', component: SupportComponent,
  resolve:{
    pageContent: AppResolveService,
   } 
},
{ path: 'download-pogo-lt', component: DownloadComponent,
  resolve:{
    pageContent: AppResolveService,
   }
},
{ path: 'privacy-policy', component: DefaultPageComponent,
  resolve:{
    pageContent: AppResolveService,
   }
},
{ path: 'licenses', component: DefaultPageComponent,
  resolve:{
    pageContent: AppResolveService,
   }
}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

