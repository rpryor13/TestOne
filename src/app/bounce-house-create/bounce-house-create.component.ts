import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bounce-house-create',
  templateUrl: './bounce-house-create.component.html',
  styleUrls: ['./bounce-house-create.component.css']
})
export class BounceHouseCreateComponent implements OnInit {

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });



  bounceHouseName = '';
  description = '';
  purchaseDate = '';
  purchaseAmount = 0;
  employees = 0;
  uses = 0;
  vehicle = '';
  stakes = 0;
  blowers = 0;
  lastUsed = '';
  inflatableType = '';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateBounceHouse(event: Event) {
    this.bounceHouseName = (<HTMLInputElement>event.target).value;
  }

  onUpdateDescription(event: Event) {
    this.description = (<HTMLInputElement>event.target).value;
  }

  onUpdateDate(event: Event) {
    this.purchaseDate = (<HTMLInputElement>event.target).value;
  }

  onUpdatePurchaseAmount(event: Event) {
    this.purchaseAmount = Number((<HTMLInputElement>event.target).value);
  }

  onUpdateEmployees(event: Event) {
    this.employees = Number((<HTMLInputElement>event.target).value);
  }

  onUpdateUses(event: Event) {
    this.uses = Number((<HTMLInputElement>event.target).value);
  }

  onUpdateVehicle(event: Event) {
    this.vehicle = (<HTMLInputElement>event.target).value;
  }

  onUpdateStakes(event: Event) {
    this.stakes = Number((<HTMLInputElement>event.target).value);
  }

  onUpdateBlowers(event: Event) {
    this.blowers = Number((<HTMLInputElement>event.target).value);
  }

  onUpdateDateUsed(event: Event) {
    this.lastUsed = (<HTMLInputElement>event.target).value;
  }

  onUpdateInflatable(event: Event) {
    this.inflatableType = (<HTMLInputElement>event.target).value;
  }




  
  alert() {
    window.alert('The inflatable type is: ' + this.inflatableType + 'The name is: ' + this.bounceHouseName + "\n" + 'The description is: ' + this.description + "\n" + 'The purchase date was: ' + this.purchaseDate
    + "\nThe bounce house was purchased for : " + this.formatter.format(this.purchaseAmount) + "\nYou need " + this.employees + " employees to set up this inflatable"
    + "\nThis bounce house has been used " + this.uses + " times" + "\nThe vehicle type needed is: " + this.vehicle + "\nYou need to bring " + this.stakes + " stakes/sandbags with this inflatable"
    + "\nYou need to bring " + this.blowers + " blowers with this inflatable" + "\nThis inflatable was last used on: " + this.lastUsed
    );
  }

}






