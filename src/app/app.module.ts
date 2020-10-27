import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppResolveService } from './app-resolve.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultPageModule } from './default-page/default-page.module';
import { DownloadModule } from './download/download.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { KontentService } from './kontent.service';
import { LoadinScreenComponent } from './loading-screen/loading-screen.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationDirective } from './navigation/navigation.directive';
import { NavigationService } from './navigation/navigation.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from './seo.service';
import { SupportModule } from './support/support.module';
import { WindowRef } from './utils/window.service';
import {appRouting} from './app.routing';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId:'pogo-lt'}),
    appRouting,
    SupportModule,
    ReactiveFormsModule,
    DefaultPageModule,
    DownloadModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations:[
    AppComponent,
    FooterComponent,
    NavigationComponent,
    AboutComponent,
    NavigationDirective,
    LoadinScreenComponent
  ],
  providers: [WindowRef, KontentService,NavigationService,AppResolveService,SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
