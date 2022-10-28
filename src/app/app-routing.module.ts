import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'inventory', component:InventoryComponent, canActivate:[AuthGuard]},
  {path:'##', component:HomeComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
