import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { AvailableOffersComponent } from './available-offers/available-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOfferComponent,
    OffersListComponent,
    AvailableOffersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
