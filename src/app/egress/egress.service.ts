import { Egress } from './egress.model';

export class EgressService {
  expenditure: Egress[] = [
    new Egress('Arriendo', 500000),
    new Egress('Luz', 80000),
  ];

  delete(egress: Egress) {
    const indice: number = this.expenditure.indexOf(egress);
    this.expenditure.splice(indice, 1);
  }
}
