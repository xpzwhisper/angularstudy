import { product } from './../searchinput/searchinput.component';
import { EventEmitter, Output, Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css'],
})
export class PricelistComponent implements OnInit {
  @Input()
  productsHtml: product[] = [];
  constructor(public http: HttpClient) {}
  selectedProduct: object = {};

  realList: [] = [];

  @Output() clickedPrice: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  priceClick(price: number) {
    this.clickedPrice.emit(price);
  }
}
