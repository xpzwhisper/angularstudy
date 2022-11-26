import { EventEmitter, Output, Component, Input, OnInit } from '@angular/core';
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
  @Output() clickedPrice: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  priceClick(price: any) {
    this.clickedPrice.emit(price);
  }
}
