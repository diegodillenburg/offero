import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-offers',
  templateUrl: './available-offers.component.html',
  styleUrls: ['./available-offers.component.sass']
})
export class AvailableOffersComponent implements OnInit {
  offersList: any = [];


  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  getOffers() {
    return this.http.get('http://localhost:3000/offers/').subscribe((res:any) => this.offersList = res.offers);
  }

  ngOnInit(): void {
    this.getOffers();
  }

}
