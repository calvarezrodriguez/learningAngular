import { Component, OnInit } from '@angular/core';
import { Person } from '../../people.model';
import { LoggingService } from '../../LoggingService.service';
import { PeopleService } from '../../people.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  inputName: string;
  inputLastname: string;
  index: number;
  editMode: number;

  constructor(
    private logginService: LoggingService,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.peopleService.greetings.subscribe((indice: number) =>
      alert('The indice is: ' + indice)
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.editMode = +this.route.snapshot.queryParams['editMode'];
    if (this.editMode != null && this.editMode === 1) {
      let person: Person = this.peopleService.findPerson(this.index);
      this.inputName = person.name;
      this.inputLastname = person.lastname;
    }
  }

  onSavePerson() {
    let person1 = new Person(this.inputName, this.inputLastname);
    if (this.editMode != null && this.editMode === 1) {
      this.peopleService.editPerson(this.index, person1);
    } else {
      this.peopleService.addPerson(person1);
    }
    this.router.navigate(['people']);
  }

  deletePerson() {
    if (this.index != null) {
      this.peopleService.deletePerson(this.index);
    }
    this.router.navigate(['people']);
  }
}
