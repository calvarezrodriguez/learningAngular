import { Person } from './people.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.services';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  greetings = new EventEmitter<number>();

  constructor(
    private logginService: LoggingService,
    private dataService: DataService
  ) {}

  setPeople(people: Person[]) {
    this.people = people;
  }

  getPeople() {
    return this.dataService.loadPeople();
  }

  addPerson(person: Person) {
    this.logginService.sendConsoleMessage(
      'Added: ' + person.name + ' ' + person.lastname
    );
    if (this.people == null) {
      this.people = [];
    }
    this.people.push(person);
    this.dataService.savePeople(this.people);
  }

  findPerson(index: number) {
    let person: Person = this.people[index];
    return person;
  }

  editPerson(index: number, person: Person) {
    let person1 = this.people[index];
    person1.name = person.name;
    person1.lastname = person.lastname;
    this.dataService.editPerson(index, person);
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
    this.dataService.deletePerson(index);
    //Upload index
    this.editPeople();
  }

  editPeople() {
    if (this.people != null) {
      this.dataService.savePeople(this.people);
    }
  }
}
