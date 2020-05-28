import { Person } from './people.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PeopleService {
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
