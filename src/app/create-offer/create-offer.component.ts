import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.sass']
})
export class CreateOfferComponent implements OnInit {
  offerData = {
    advertiser_name: '',
    url: '',
    description: '',
    starts_at: '',
    ends_at: '',
    premium: false
  }

  public mask = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /\d/, /\d/, ' ', /[0-2]/, /\d/, ':', /[0-5]/, /[0-9]/];

  offerForm: FormGroup;

  constructor(
    public http: HttpClient,
    public router: Router) {
    this.offerForm = new FormGroup({
      advertiser_name: new FormControl(
        this.offerData.advertiser_name,
      ),
      url: new FormControl(
        this.offerData.url
      ),
      description: new FormControl(
        this.offerData.description
      ),
      starts_at: new FormControl(
        this.offerData.starts_at
      ),
      ends_at: new FormControl(
        this.offerData.ends_at
      ),
      premium: new FormControl(
        this.offerData.premium
      )
    })
  }

  submit() {
    let payload = {
      offer: {
        advertiser_name: this.offerData.advertiser_name,
        url: this.offerData.url,
        description: this.offerData.description,
        starts_at: this.offerData.starts_at,
        ends_at: this.offerData.ends_at,
        premium: this.offerData.premium
      }
    };

    return this.http.post('http://localhost:3000/offers', payload)
      .toPromise()
      .then((res) => this.gotoOffersList(), (err) => {
        console.log('error');
      })
  }

  gotoOffersList() {
    this.router.navigate(['/offers/list']);
  }

  ngOnInit(): void {
  }

}
