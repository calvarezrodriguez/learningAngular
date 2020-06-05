import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'People List';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyC087_rq2t6ATBzObdSyV9-Xl_77IVTCKo',
      authDomain: 'people-list-6b3b0.firebaseapp.com',
    });
  }

  isAuth() {
    return this.loginService.isAuth();
  }

  logout() {
    this.loginService.logout();
  }
}
