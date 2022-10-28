import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    EventsComponent,
    SalesComponent,
    InventoryComponent,
    BounceHouseComponent,
    BounceHouseCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IgxNavbarModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxButtonGroupModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ30nJV86YNwb4tJugNk110dZenMffLBU",
      authDomain: "vernal-design-313916.firebaseapp.com",
      databaseURL: "https://vernal-design-313916-default-rtdb.firebaseio.com",
      projectId: "vernal-design-313916",
      storageBucket: "vernal-design-313916.appspot.com",
      messagingSenderId: "174449647637",
      appId: "1:174449647637:web:092bc08da262e4cd1d2e1c",
      measurementId: "G-81XNEJE3PG"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
