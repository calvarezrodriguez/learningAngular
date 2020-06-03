import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry/entry.service';
import { EgressService } from '../egress/egress.service';
import { Entry } from '../entry/entry.model';
import { Egress } from '../egress/egress.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  type: string = 'entryOption';
  inputDescription: string;
  inputValue: number;

  constructor(
    private entryService: EntryService,
    private egressService: EgressService
  ) {}

  ngOnInit(): void {}

  getType(event) {
    this.type = event.target.value;
  }
  
  addValue() {
    if (this.type === 'entryOption') {
      this.entryService.entries.push(
        new Entry(this.inputDescription, this.inputValue)
      );
    } else {
      this.egressService.expenditure.push(
        new Egress(this.inputDescription, this.inputValue)
      );
    }
  }
}
