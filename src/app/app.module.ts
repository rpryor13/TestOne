import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SalesComponent } from './sales/sales.component';
import { IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxButtonGroupModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryComponent } from './inventory/inventory.component';
import { BounceHouseComponent } from './bounce-house/bounce-house.component';
import { BounceHouseCreateComponent } from './bounce-house-create/bounce-house-create.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    EventsComponent,
    SalesComponent,
    InventoryComponent,
    BounceHouseComponent,
    BounceHouseCreateComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IgxNavbarModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxButtonGroupModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


function initializeApp(
  environment: { production: boolean; }, 
  firebase: unknown
): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

