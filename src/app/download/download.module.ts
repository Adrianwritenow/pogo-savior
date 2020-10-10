import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoDownloadDirective } from './auto-download.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DownloadButtonDirective } from './download-form/download-button.directive';
import { DownloadComponent } from './download.component';
import { DownloadFormComponent } from './download-form/download-form.component';
import { DownloadRegestrationComponent } from './download-regestration/download-regestration.component';
import { DownloadSuccessComponent } from './download-success/download-success.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [DownloadComponent,DownloadFormComponent,DownloadRegestrationComponent,DownloadSuccessComponent,
    DownloadButtonDirective,AutoDownloadDirective
],
  providers:[],

  bootstrap: [DownloadComponent]

})
export class DownloadModule { }
