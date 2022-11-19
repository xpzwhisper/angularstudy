import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}

  selectedProduct: any;

  @Input() productsHtml: any;
  @Output() clickedBrand: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  BrandClick(brand: any) {
    console.log(brand);
    this.clickedBrand.emit(brand);
  }
}
