import { Component } from '@angular/core';
import { Person } from './people.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'People List';
  people: Person[] = [
    new Person('Cristian', 'Alvarez'),
    new Person('Tamara', 'Gomez'),
  ];
  inputName: string;
  inputLastname: string;

  onAddPerson() {
    let person1 = new Person(this.inputName, this.inputLastname);
    this.people.push(person1);
  }
}
