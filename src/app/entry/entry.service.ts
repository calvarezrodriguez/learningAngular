import { Entry } from './entry.model';

export class EntryService {
  entries: Entry[] = [
    new Entry('Guitarras Eléctricas', 800000),
    new Entry('Bajos Eléctricos', 500000),
  ];

  delete(egress: Entry) {
    const indice: number = this.entries.indexOf(egress);
    this.entries.splice(indice, 1);
  }
}
