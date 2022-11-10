import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BounceHouseCreateComponent } from "./bounce-house-create/bounce-house-create.component";
import { HomeComponent } from "./home/home.component";
import { EventsComponent } from "./events/events.component";
import { SalesComponent } from "./sales/sales.component";
import { EquipmentComponent } from "./equipment/equipment.component";

//Components
import { InventoryComponent } from "./inventory/inventory.component";

import { CustomersPageComponent } from "./customers-page/customers-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Inventory', component: InventoryComponent },
  { path: 'Bounce_Houses', component: BounceHouseCreateComponent },
  { path: 'Event', component: EventsComponent },
  { path: 'Sales', component: SalesComponent },

  { path: 'Customers', component: CustomersPageComponent },
  { path: 'Equipment', component: EquipmentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //set these up as the root routes for the app
  exports: [RouterModule] //allow import into the app module
})
export class AppRoutingModule{}
