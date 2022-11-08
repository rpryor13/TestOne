import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Customer } from "./customer.model";
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(private db: AngularFirestore) {}

  //Add a new customer to the database
  //passing in a customer object from the form
  addCustomer(customer: Customer) {
    //Convert Customer model to JSON object
    const customerObject = {...customer};
    return this.db.collection('Customers').add(customerObject);
  }

  //Get Customers (retrieve from db) WITH ID
  //returns an observable object with a list of customers from the db
  getCustomers() {
    return this.db.collection('Customers').snapshotChanges();
  }

  //take customer object and update the firestore document
  updateCustomer(customer: Customer) {
    //convert to JSON
    const customerObject = {...customer};
    this.db.doc('Customers/' + customer.id).update(customerObject);
  }

  //delete customer from db (takes an id)
  deleteCustomer(customerId: string) {
    this.db.doc('Customers/' + customerId).delete();
  }

}
