import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './people.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  //Load People
  loadPeople() {
    return this.httpClient.get(
      'https://people-list-6b3b0.firebaseio.com/datos.json'
    );
  }

  //Save People
  savePeople(people: Person[]) {
    this.httpClient
      .put('https://people-list-6b3b0.firebaseio.com/datos.json', people)
      .subscribe(
        (response) => {
          console.log('Save people state: ' + response);
        },
        (error) => console.log('Save people error:' + error)
      );
  }

  //Edit Person
  editPerson(index: number, person: Person) {
    let url: string;
    url = 'https://people-list-6b3b0.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, person).subscribe(
      (response) => console.log('Result edit person: ' + response),
      (error) => console.log('Edit person error: ' + error)
    );
  }

  //Delete Person
  deletePerson(index: number) {
    let url: string;
    url = 'https://people-list-6b3b0.firebaseio.com/datos/' + index + '.json';
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Result delete person: ' + response),
      (error) => console.log('Delete person error: ' + error)
    );
  }
}
