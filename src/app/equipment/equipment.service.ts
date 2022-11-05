import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { Equipment } from "./equipment.model";

@Injectable()
export class EquipmentService {

  constructor(private db: AngularFirestore) {}

  //Add a new customer to the database
  //passing in a customer object from the form
  addEquipment(equipment: Equipment) {
    //Convert Customer model to JSON object
    const equipmentObject = {...equipment};
    return this.db.collection('Equipments').add(equipmentObject);
  }

  //Get Customers (retrieve from db) WITH ID
  //returns an observable object with a list of customers from the db
  getEquipments() {
    return this.db.collection('Equipments').snapshotChanges();
  }

  //take customer object and update the firestore document
  updateEquipment(equipment: Equipment) {
    //convert to JSON
    const equipmentObject = {...equipment};
    this.db.doc('Equipments/' + equipment.id).update(equipmentObject);
  }

  //delete customer from db (takes an id)
  deleteEquipment(equipmentId: string) {
    this.db.doc('Equipments/' + equipmentId).delete();
  }

}