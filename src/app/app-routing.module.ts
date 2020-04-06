import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AvailableOffersComponent } from './available-offers/available-offers.component';
import { AvailableOffersComponent } from './available-offers/available-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OffersListComponent } from './offers-list/offers-list.component';

const routes: Routes = [
  { path: '', component: AvailableOffersComponent },
  { path: 'offers/available', component: AvailableOffersComponent },
  { path: 'offers/create', component: CreateOfferComponent },
  { path: 'offers/list', component: OffersListComponent },
  { path: 'offers/:offerId/edit', component: CreateOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
