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
  productsHtml: any;
  realList: any;
  @Input() ParentSearch: any;

  ngOnChanges(changes: any): void {
    console.log('ˇtesting', changes, this.ParentSearch);
    this.inputChangePrice();
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

  inputChangePrice() {
    let products = [];
    for (const product of this.realList) {
      if (this.ParentSearch <= product.price) {
        products.push(product);
      }
    }
    this.productsHtml = products;
    // this.loopOverBrandFilter();
    // this.inputChangeSortByPrice();
  }
}
