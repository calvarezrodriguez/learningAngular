import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent,
    PeopleComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggingService, PeopleService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
