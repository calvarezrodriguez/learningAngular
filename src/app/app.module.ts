import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';
import { ResultComponent } from './result/result.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    ResultComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
