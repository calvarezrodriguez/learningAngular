import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
})
export class SumComponent implements OnInit {
  result: number;

  constructor() {}

  onDisplayResult(result: number) {
    this.result = result;
  }

  ngOnInit(): void {}
}
