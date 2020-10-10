import { BeforePogoAnimsDirective } from './before-pogo-anims.directive';
import { CommonModule } from '@angular/common';
import { HeroHeaderAnimsDirective } from './hero-header-anims.directive';
import { HomeComponent } from './home.component';
import { HomeExplaningAnimsDirective } from './home-explaning-anims.directive';
import { NgModule } from '@angular/core';
import { UsingPogoAnimsDirective } from './using-pogo-anims.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeroHeaderAnimsDirective,
    HomeComponent,
    HomeExplaningAnimsDirective,
    UsingPogoAnimsDirective,
    BeforePogoAnimsDirective],

    providers:[],

    
  bootstrap: [HomeComponent]

})
export class HomeModule { }
