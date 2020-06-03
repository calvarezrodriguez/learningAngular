import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() totalEntry: number;
  @Input() totalEgress: number;
  @Input() totalQuote: number;
  @Input() totalPercent: number;

  constructor() {}

  ngOnInit(): void {}
}
