import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.sass']
})
export class OffersListComponent implements OnInit {
  offersList: any = [];

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  getOffers() {
    return this.http.get('http://localhost:3000/offers/?admin=true').subscribe((res:any) => this.offersList = res.offers);
  }

  overrideOffer(offerId) {
    return this.http.put('http://localhost:3000/offers/' + offerId + '/override_state', {})
      .subscribe((res:any) => {
        if (res.message == 'overriden') {
          this.getOffers();
        }
      });
  }

  deleteOffer(offerId) {
    return this.http.delete('http://localhost:3000/offers/' + offerId)
      .subscribe((res:any) => {
        if (res.message == 'deleted') {
          this.getOffers();
        }
      })
  }

  ngOnInit(): void {
    this.getOffers();

    console.log(this.offersList);
  }
}
