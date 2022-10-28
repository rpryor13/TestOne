import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BounceHouseCreateComponent } from "./bounce-house-create/bounce-house-create.component";
import { HomeComponent } from "./home/home.component";

//Components
import { InventoryComponent } from "./inventory/inventory.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, //Root path
  { path: 'Inventory', component: InventoryComponent },
  { path: 'Bounce_Houses', component: BounceHouseCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //set these up as the root routes for the app
  exports: [RouterModule] //allow import into the app module
})
export class AppRoutingModule{}
