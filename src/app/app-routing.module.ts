import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

//Components
import { InventoryComponent } from "./inventory/inventory.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, //Root path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //set these up as the root routes for the app
  exports: [RouterModule] //allow import into the app module
})
export class AppRoutingModule{}
