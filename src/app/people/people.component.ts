import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PeopleService } from '../people.service';
import { Person } from '../people.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private logginService: LoggingService,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((people: Person[]) => {
      this.people = people;
      this.peopleService.setPeople(people);
    });
  }

  add() {
    this.router.navigate(['people/add']);
  }
}
