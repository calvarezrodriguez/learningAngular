// This service is used to create and add persons in an array
import { Person } from './people.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PeopleService {
  //Generate examples
  people: Person[] = [
    new Person('Cristian', 'Alvarez'),
    new Person('Tamara', 'Gomez'),
  ];

  greetings = new EventEmitter<number>();

  constructor(private logginService: LoggingService) {}

  addPerson(person: Person) {
    this.logginService.sendConsoleMessage(
      'Added: ' + person.name + ' ' + person.lastname
    );
    this.people.push(person);
  }
}
