import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../people.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() indice:number;

  constructor() {}

  ngOnInit(): void {}
}
