import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../people.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() createdPerson = new EventEmitter<Person>();
  inputName: string;
  inputLastname: string;

  constructor() {}

  ngOnInit(): void {}

  onAddPerson() {
    let person1 = new Person(this.inputName, this.inputLastname);
    this.createdPerson.emit(person1);
  }
}
