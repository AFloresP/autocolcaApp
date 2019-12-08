import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private db: AngularFirestore) { }

  getHotels() {
    return this.db.collection('hotels').snapshotChanges();
  }
}
