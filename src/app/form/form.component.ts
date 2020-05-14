import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  aOperator: number;
  bOperator: number;
  @Output() result = new EventEmitter<number>();

  constructor() {}

  onSum() {
    let sum = this.aOperator + this.bOperator;
    this.result.emit(sum);
  }

  ngOnInit(): void {}
}
