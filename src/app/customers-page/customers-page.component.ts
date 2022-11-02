import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  onCreateCustomer(form: NgForm) {
    this.customers.push({
      
      id: 'asd',
      firstName: form.value.firstName,
      lastName: 'asd',
      email: 'asd',
      phoneNumber: 'asd'

    });
  }

}
