import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  collectionName : 'Names';
  constructor(private firestore: AngularFirestore) {

  }

  create_name(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }
}
