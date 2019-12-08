import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FestivityService {

  constructor(private db: AngularFirestore) { }

  getFestivities() {
    return this.db.collection('festivities').snapshotChanges();
  }
}
