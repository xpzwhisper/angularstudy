import { product } from './../searchinput/searchinput.component';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}

  selectedProduct: object = {};

  @Input() productsHtml: product[] = [];
  @Output() clickedBrand: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  BrandClick(brand: string) {
    console.log(brand);
    this.clickedBrand.emit(brand);
  }
}
