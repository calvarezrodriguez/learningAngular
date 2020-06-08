import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BoardComponent } from './component/board/board.component';
import { ClientsComponent } from './component/clients/clients.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ConfigComponent } from './component/config/config.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './services/client.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ConfigService } from './services/config.service';
import { ConfigGuard } from './guards/config.guard';
import { EditClientComponent } from './component/clients/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ClientsComponent,
    EditClientComponent,
    LoginComponent,
    RegisterComponent,
    ConfigComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'client-control'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    ClientService,
    LoginService,
    AuthGuard,
    ConfigService,
    ConfigGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
