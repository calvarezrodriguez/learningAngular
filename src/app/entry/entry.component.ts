import { Component, OnInit } from '@angular/core';
import { EntryService } from './entry.service';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.entries = this.entryService.entries;
  }

  deleteEntry(entry: Entry) {
    this.entryService.delete(entry);
  }
}
