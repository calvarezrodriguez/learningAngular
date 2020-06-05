import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './people.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //Load People
  loadPeople() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://people-list-6b3b0.firebaseio.com/datos.json?auth=' + token
    );
  }

  //Save People
  savePeople(people: Person[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://people-list-6b3b0.firebaseio.com/datos.json?auth=' + token,
        people
      )
      .subscribe(
        (response) => {
          console.log('Save people state: ' + response);
        },
        (error) => console.log('Save people error:' + error)
      );
  }

  //Edit Person
  editPerson(index: number, person: Person) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://people-list-6b3b0.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.put(url, person).subscribe(
      (response) => console.log('Result edit person: ' + response),
      (error) => console.log('Edit person error: ' + error)
    );
  }

  //Delete Person
  deletePerson(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://people-list-6b3b0.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Result delete person: ' + response),
      (error) => console.log('Delete person error: ' + error)
    );
  }
}
