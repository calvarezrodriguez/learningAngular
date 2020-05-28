import { Component, OnInit } from '@angular/core';
import { Person } from './people.model';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'People List';
  people: Person[] = [];

  constructor(
    private logginService: LoggingService,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }
}
