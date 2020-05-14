import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Person } from '../people.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() createdPerson = new EventEmitter<Person>();
  // inputName: string;
  // inputLastname: string;
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputLastname') inputLastname: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddPerson() {
    let person1 = new Person(this.inputName.nativeElement.value,this.inputLastname.nativeElement.value);
    this.createdPerson.emit(person1);
  }
}
