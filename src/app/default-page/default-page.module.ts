
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [DefaultPageComponent],
  providers:[],
  bootstrap: [DefaultPageComponent]

})
export class DefaultPageModule { }
