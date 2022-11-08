import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})

export class CustomersPageComponent implements OnInit {

  //Variables
  customer: Customer = <Customer>{};
  //Array of Customers
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {

    //add getCustomers() so we get data to display on the template as soon as it loads
    this.getCustomers();

  }

  //Local getCustomers method ***DIFFERENT FROM ONE IN THE SERVICE.TS***
  getCustomers() {

    //get list from CustomerService
    this.customerService.getCustomers().subscribe(data => {

      //this.customers stores an array of customers (with ID)
      this.customers = data.map(e => {
        const data = e.payload.doc.data() as Customer
        return {
          id: e.payload.doc.id,
          strFirstName: data.strFirstName,
          strLastName: data.strLastName,
          strEmail: data.strEmail,
          strPhoneNumber: data.strPhoneNumber
        };
      });
    });
  }

  //This method takes the update click and passes the customer object
  onUpdateClick(customer: Customer) {

  }

  //This method takes a customer object and calls
  //updateCustomer() from CustomerService
  updateCustomer(customer: Customer) {
    this.customerService.updateCustomer(customer);

    //clear/reset object
    this.customer = <Customer>{};
  }

  //this method takes a Customer ID and
  //calls deleteCustomer from CustomerService
  deleteCustomer(customerId: string) {
    this.customerService.deleteCustomer(customerId);
  }

  //Get Customer field values and store in customer property
  onCreateCustomer(form: NgForm) {

    //If form is invalid, return to the form
    if(form.invalid){
      return;
    }

    //Push new customer entry to array
    this.customer.strFirstName = form.value.firstName;
    this.customer.strLastName = form.value.lastName;
    this.customer.strEmail = form.value.email;
    this.customer.strPhoneNumber = form.value.phoneNumber;

    this.addCustomer(this.customer);

    //Clear the form controls for next entry
    form.resetForm();

  }

  //This method takes a customer object and
  //calls addCustomer() from CustomerService
  addCustomer(customer: Customer) {
    return this.customerService.addCustomer(customer);
  }

}
