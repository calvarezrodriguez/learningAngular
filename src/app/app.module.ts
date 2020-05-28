import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //We import the services to use in our program
  providers: [LoggingService,PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
