import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// --------------------------------------------------------------------
// --- INTERFACES -----------------------------------------------------
// --------------------------------------------------------------------
interface user {
  email: string;
  password: string;
}

interface Apiresponse {
  products: [];
  skip: number;
  limit: number;
  total: number;
}

export interface product {
  brand: string;
  price: number;
  stock: number;
  id: number;
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.css'],
})
export class SearchinputComponent implements OnInit {
  john: user = { email: 'hasss@yahoo.com', password: 'ˇpassword' };
  constructor(public http: HttpClient) {
    // this.john.email='something@go.com';
    // this.john.password='password'
  }
  filteredString: string = '';
  searchResults: product[] = [];
  productsHtml: product[] = [];
  realList: product[] = [];
  result: string = '';
  sortByBrand: boolean = false;
  sortByPrice: boolean = false;
  sortByStock: boolean = false;
  sampleJson: string = '';
  clickedPriceVal: number = 0;

  sortingError: boolean = false;
  ngOnInit(): void {
    this.http
      .get<Apiresponse>('https://dummyjson.com/products')
      .subscribe((data: Apiresponse) => {
        this.productsHtml = data.products; //all products
        this.realList = data.products;
      });
  }

  inputChange() {
    let products: product[] = [];
    let x = this.filteredString.toLowerCase();
    for (const product of this.realList) {
      let brand: String = product['brand'];
      brand = brand.toLowerCase();
      console.log(x);

      if (brand.includes(x) && x !== '') {
        products.push(product);
      }
      if (parseFloat(this.filteredString) <= product['price']) {
        products.push(product);
      }
    }
    console.log(this.productsHtml);

    this.productsHtml = products;
    this.sorting();
  }

  sorting() {
    let sortItems = this.productsHtml.slice(0);
    let boolCounter = 0;
    this.sortByBrand ? boolCounter++ : '';
    this.sortByPrice ? boolCounter++ : '';
    this.sortByStock ? boolCounter++ : '';
    this.sortingError = boolCounter > 1;
    if (boolCounter > 1) {
      this.sortingError = true;
    } else {
      if (this.sortByBrand) {
        sortItems.sort(function (a: product, b: product) {
          return a.brand.localeCompare(b.brand);
        });
      }
      if (this.sortByPrice) {
        sortItems.sort((a: product, b: product) => {
          console.log('price!');
          return a.price - b.price;
        });
      }
      if (this.sortByStock) {
        sortItems.sort((a: product, b: product) => {
          console.log('stock!');
          return a.stock - b.stock;
        });
      }
      if (!this.sortByBrand && !this.sortByPrice && !this.sortByStock) {
        sortItems.sort((a: product, b: product) => {
          return a.id - b.id;
        });
      }
    }
    this.productsHtml = sortItems;
  }

  changeResult(result: string) {
    this.result = result;
  }
  clickedPrice(price: number) {
    this.clickedPriceVal = price;
  }
}
