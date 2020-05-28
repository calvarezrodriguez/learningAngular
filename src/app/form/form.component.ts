import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Person } from '../people.model';
import { LoggingService } from '../LoggingService.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  inputName: string;
  inputLastname: string;
  // @ViewChild('inputName') inputName: ElementRef;
  // @ViewChild('inputLastname') inputLastname: ElementRef;

  constructor(
    private logginService: LoggingService,
    private peopleService: PeopleService
  ) {
    this.peopleService.greetings.subscribe((indice: number) =>
      alert('The indice is: ' + indice)
    );
  }

  ngOnInit(): void {}

  onAddPerson() {
    let person1 = new Person(
      this.inputName,
      this.inputLastname
    );
    this.peopleService.addPerson(person1);
  }
}
