import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
})
export class SumComponent implements OnInit {
  aOperator: number;
  bOperator: number;
  result: number;

  constructor() {}

  onSum() {
    this.result = this.aOperator + this.bOperator;
  }

  ngOnInit(): void {}
}
