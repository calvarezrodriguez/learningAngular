import {
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Config } from '../model/config.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  configDoc: AngularFirestoreDocument<Config>;
  config: Observable<Config>;

  //id from collection
  id = 1;

  constructor(private db: AngularFirestore) {}

  getConfig(): Observable<Config> {
    this.configDoc = this.db.doc<Config>(`config/${this.id}`);
    this.config = this.configDoc.valueChanges();
    return this.config;
  }

  editConfig(config: Config) {
    this.configDoc = this.db.doc<Config>(`config/${this.id}`);
    this.configDoc.update(config);
  }
}
