import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}
  productsHtml: any;
  selectedProduct: any;
  filteredString: any = '';
  filteredPrice: any;
  realList: any;
  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      //console.log(data.products);
      this.productsHtml = data.products; //all products
      this.realList = data.products;
    });
  }
  inputChangeBrand(event: any) {
    console.log(event, this.filteredString);
    let x = event.toLowerCase();
    let products = [];
    if (typeof this.filteredPrice === 'undefined') {
      console.log('yes');
      for (const product of this.realList) {
        let brand = product.brand;
        brand = brand.toLowerCase();
        if (brand.includes(x)) {
          products.push(product);
        }
      }
    } else {
      for (const product of this.productsHtml) {
        let brand = product.brand;
        brand = brand.toLowerCase();
        if (brand.includes(x)) {
          products.push(product);
        }
      }
    }
    //results
    this.productsHtml = products;
  }
  inputChangePrice(event: any) {
    let products = [];
    if (this.filteredString === '') {
      console.log(event);
      for (const product of this.realList) {
        if (event <= product.price) {
          products.push(product);
        }
      }
    } else {
      for (const product of this.productsHtml) {
        if (event <= product.price) {
          products.push(product);
        }
      }
    }
    //results
    this.productsHtml = products;
  }
}
