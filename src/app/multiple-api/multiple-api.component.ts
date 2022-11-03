import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}
  product: any;
  selectedProduct: any;
  filteredString: any = '';
  realList: any;
  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      console.log(data.products);
      this.product = data.products; //all products
      this.realList = data.products;
    });
  }
  inputChange(event: any) {
    console.log(event);
    let x = event.toLowerCase();
    let products = [];
    for (const product of this.realList) {
      let brand = product.brand;
      brand = brand.toLowerCase();
      if (brand.includes(x)) {
        products.push(product);
      }
    }
    //results
    this.product = products;
  }
}
