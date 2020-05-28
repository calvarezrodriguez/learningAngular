import { Component, OnInit } from '@angular/core';
import { Person } from './people.model';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//Implements OnInit to init variables
export class AppComponent implements OnInit {
  title = 'People List';
  people: Person[] = [];

  //Import console logs
  constructor(
    private logginService: LoggingService,
    private peopleService: PeopleService
  ) {}

  //Used to init variables
  ngOnInit(): void {
    this.people = this.peopleService.people;
  }

  // onAddPerson(person: Person) {
  //   // this.logginService.sendConsoleMessage(
  //   //   'We add to array a new person: ' + person.name + ' ' + person.lastname
  //   // );
  //   // this.people.push(person);
  //   this.peopleService.addPerson(person);
  // }
}
