import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  apiRespose: any;
  haveResponse = false;
  formatedDate = '';
  billingdata = {
    name: '',
    phone: '',
    date: '',
    address: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        this.apiRespose = data;
        this.haveResponse = true;
        console.log('ˇRUn this code when get date', data);
      });
  }

  buttonclick() {
    // let date = this.billingdata.date;
    // this.formatedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a'); // October 14th 2022, 1:30:57 pm
    console.log(this.billingdata);
  }
}
