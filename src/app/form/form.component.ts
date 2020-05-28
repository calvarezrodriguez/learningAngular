import {
  Component,
  OnInit,
  // Output,
  // EventEmitter,
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
  // @Output() createdPerson = new EventEmitter<Person>();
  // inputName: string;
  // inputLastname: string;

  //Catch easy information
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputLastname') inputLastname: ElementRef;

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
      this.inputName.nativeElement.value,
      this.inputLastname.nativeElement.value
    );
    // this.logginService.sendConsoleMessage(
    //   'We send person with name: ' +
    //     person1.name +
    //     ', and Lastname: ' +
    //     person1.lastname
    // );
    // this.createdPerson.emit(person1);
    this.peopleService.addPerson(person1);
  }
}
