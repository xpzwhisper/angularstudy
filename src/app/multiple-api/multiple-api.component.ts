import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}
  productsHtml: any;
  realList: any;
  selectedProduct: any;
  filteredString: any = '';
  filteredPrice: any;
  priceSort: any;
  @Input() ParentSearch: any;

  ngOnChanges(changes: any): void {
    console.log('ˇtesting', changes, this.ParentSearch);
    this.inputChangeBrand();
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      //console.log(data.products);
      this.productsHtml = data.products; //all products
      this.realList = data.products;
    });
  }

  inputChangeBrand() {
    let products = [];
    let x = this.ParentSearch.toLowerCase();
    for (const product of this.realList) {
      let brand = product.brand;
      brand = brand.toLowerCase();
      if (brand.includes(x)) {
        products.push(product);
      }
    }
    this.productsHtml = products;
    //  this.loopOverPriceFilter();
    //  this.inputChangeSortByPrice();
  }

  inputChangePrice() {
    let products = [];
    for (const product of this.realList) {
      if (this.filteredPrice <= product.price) {
        products.push(product);
      }
    }
    this.productsHtml = products;
    this.loopOverBrandFilter();
    this.inputChangeSortByPrice();
  }

  loopOverPriceFilter() {
    let products = [];
    if (typeof this.filteredPrice !== 'undefined') {
      for (const product of this.productsHtml) {
        if (this.filteredPrice <= product.price) {
          products.push(product);
        }
      }
      this.productsHtml = products;
    }
  }

  loopOverBrandFilter() {
    let products = [];
    let x = this.ParentSearch.toLowerCase();
    if (typeof this.filteredPrice !== 'undefined') {
      for (const product of this.productsHtml) {
        let brand = product.brand;
        brand = brand.toLowerCase();
        if (brand.includes(x)) {
          products.push(product);
        }
      }
      this.productsHtml = products;
    }
  }

  inputChangeSortByPrice() {
    let sortByItems = this.productsHtml.slice(0);
    if (this.priceSort) {
      sortByItems.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    } else {
      sortByItems.sort((a: any, b: any) => {
        return a.id - b.id;
      });
    }
    this.productsHtml = sortByItems;
  }
}
