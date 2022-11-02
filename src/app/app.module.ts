import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SalesComponent } from './sales/sales.component';
import { IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxButtonGroupModule } from 'igniteui-angular';
import { InventoryComponent } from './inventory/inventory.component';
import { BounceHouseComponent } from './bounce-house/bounce-house.component';
import { BounceHouseCreateComponent } from './bounce-house-create/bounce-house-create.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ViewInflatablesComponent } from './view-inflatables/view-inflatables.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InflatablesService } from './view-inflatables/inflatables.service';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { CustomerService } from './customers-page/customer.service';
import { Customer } from './customers-page/customer.model';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    ViewInflatablesComponent,
    CustomersPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IgxNavbarModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxButtonGroupModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    Ng2SmartTableModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ30nJV86YNwb4tJugNk110dZenMffLBU",
      authDomain: "vernal-design-313916.firebaseapp.com",
      databaseURL: "https://vernal-design-313916-default-rtdb.firebaseio.com",
      projectId: "vernal-design-313916",
      storageBucket: "vernal-design-313916.appspot.com",
      messagingSenderId: "174449647637",
      appId: "1:174449647637:web:092bc08da262e4cd1d2e1c",
      measurementId: "G-81XNEJE3PG"
    }),
    AngularFirestoreModule,
    FlexLayoutModule,
  ],
  providers: [InflatablesService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
