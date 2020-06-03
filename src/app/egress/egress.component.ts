import { Component, OnInit, Input } from '@angular/core';
import { EgressService } from './egress.service';
import { Egress } from './egress.model';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.css'],
})
export class EgressComponent implements OnInit {
  @Input() totalEgress: number;
  expenditure: Egress[] = [];

  constructor(private egressService: EgressService) {}

  ngOnInit(): void {
    this.expenditure = this.egressService.expenditure;
  }

  calculatePercent(egress: Egress) {
    return egress.value / this.totalEgress;
  }

  deleteEgress(egress: Egress) {
    this.egressService.delete(egress);
  }
}
