import { Component, OnInit } from '@angular/core';
import { Entry } from './entry/entry.model';
import { Egress } from './egress/egress.model';
import { EntryService } from './entry/entry.service';
import { EgressService } from './egress/egress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  entries: Entry[] = [];
  expenditure: Egress[] = [];

  constructor(
    private entryService: EntryService,
    private egressService: EgressService
  ) {}

  ngOnInit(): void {
    this.entries = this.entryService.entries;
    this.expenditure = this.egressService.expenditure;
  }

  getTotalEntry() {
    let totalEntry: number = 0;
    this.entries.forEach((entry) => {
      totalEntry += entry.value;
    });
    return totalEntry;
  }

  getTotalEgress() {
    let totalEgress: number = 0;
    this.expenditure.forEach((egress) => {
      totalEgress += egress.value;
    });
    return totalEgress;
  }

  getTotalQuote() {
    return this.getTotalEntry() - this.getTotalEgress();
  }

  getTotalPercent() {
    return this.getTotalEgress() / this.getTotalEntry();
  }
}
