//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxButtonGroupModule } from 'igniteui-angular';

//Components
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BounceHouseComponent } from './bounce-house/bounce-house.component';
import { BounceHouseCreateComponent } from './bounce-house-create/bounce-house-create.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
