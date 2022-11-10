import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css'],
})
export class PricelistComponent implements OnInit {
  constructor(public http: HttpClient) {}
  selectedProduct: any;

  realList: any;
  @Input() productsHtml: any;

  ngOnInit(): void {}
}
