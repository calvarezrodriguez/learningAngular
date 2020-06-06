import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private db: AngularFirestore) {
    this.clientsCollection = db.collection('clients', (ref) =>
      ref.orderBy('lastname', 'asc')
    );
  }

  getClients(): Observable<Client[]> {
    //Get Clients
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }

  addClient(client: Client) {
    this.clientsCollection.add(client);
  }

  getClient(id: string) {
    this.clientDoc = this.db.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map((action) => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.client;
  }

  editClient(client: Client) {
    this.clientDoc = this.db.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
  }

  deleteClient(client: Client) {
    this.clientDoc = this.db.doc(`clients/${client.id}`);
    this.clientDoc.delete();
  }
}
