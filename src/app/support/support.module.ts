import { CommonModule } from '@angular/common';
import { FaqQuestionsDirective } from './faq-questions.directive';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportComponent } from './support.component';
import { SupportFormComponent } from './support-form/support-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SupportComponent,SupportFormComponent,FaqQuestionsDirective],
  bootstrap: [SupportComponent]

})
export class SupportModule { }
