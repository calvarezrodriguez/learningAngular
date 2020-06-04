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

  findPerson(index: number) {
    let person: Person = this.people[index];
    return person;
  }

  editPerson(index: number, person: Person) {
    let person1 = this.people[index];
    person1.name = person.name;
    person1.lastname = person.lastname;
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
