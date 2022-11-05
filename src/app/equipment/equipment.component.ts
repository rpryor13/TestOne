import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

//Variables
equipment: Equipment = <Equipment>{};
//Array of Customers
equipments: Equipment[] = [];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {

        //add getCustomers() so we get data to display on the template as soon as it loads
        this.getEquipments();

  }

    //Local getCustomers method ***DIFFERENT FROM ONE IN THE SERVICE.TS***
    getEquipments() {
    
      //get list from CustomerService
      this.equipmentService.getEquipments().subscribe(data => {
  
        //this.customers stores an array of customers (with ID)
        this.equipments = data.map(e => {
          const data = e.payload.doc.data() as Equipment
          return {
            id: e.payload.doc.id,
            strEquipmentName: data.strEquipmentName,
            strDescription: data.strDescription,
            intExpectedQuantity: data.intExpectedQuantity,
            intQuantityOnHand: data.intQuantityOnHand
          };
        });
      });
    }

  //This method takes a customer object and calls
  //updateCustomer() from CustomerService
  updateEquipment(equipment: Equipment) {
    this.equipmentService.updateEquipment(equipment);

    //clear/reset object
    this.equipment = <Equipment>{};
  }

  //this method takes a Customer ID and
  //calls deleteCustomer from CustomerService
  deleteEquipment(equipmentId: string) {
    this.equipmentService.deleteEquipment(equipmentId);
  }

  //Get Customer field values and store in customer property
  onCreateEquipment(form: NgForm) {

    //If form is invalid, return to the form
    if(form.invalid){
      return;
    }

    //Push new customer entry to array
    this.equipment.strEquipmentName = form.value.equipmentName;
    this.equipment.strDescription = form.value.description;
    this.equipment.intExpectedQuantity = form.value.expectedQuantity;
    this.equipment.intQuantityOnHand = form.value.quantityonHand;

    this.addEquipment(this.equipment);

    //Clear the form controls for next entry
    form.resetForm();

  }

  //This method takes a customer object and
  //calls addCustomer() from CustomerService
  addEquipment(equipment: Equipment) {
    return this.equipmentService.addEquipment(equipment);
  }

}
