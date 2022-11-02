import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  constructor(private db: AngularFirestore) {}

  //Get All Current Customers
  getCustomers() {
    return {...this.customers};
  }

}
