import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { EntryComponent } from './entry/entry.component';
import { EgressComponent } from './egress/egress.component';
import { EntryService } from './entry/entry.service';
import { EgressService } from './egress/egress.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    EntryComponent,
    EgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EntryService,EgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
