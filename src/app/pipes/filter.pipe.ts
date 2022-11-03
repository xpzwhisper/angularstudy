import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string) {
    // let re = new RegExp(filteredString, 'gi');
    // // let re = new RegExp(`${filteredString}`, 'gi');

    // if (
    //   typeof value === 'undefined' ||
    //   value.length === 0 ||
    //   typeof filteredString === 'undefined'
    // ) {
    //   return value;
    // }
    // let products = [];
    // for (const product of value) {
    //   if (re.test(product.brand)) {
    //     products.push(product);
    //   }
    // }
    if (
      typeof value === 'undefined' ||
      value.length === 0 ||
      typeof filteredString === 'undefined'
    ) {
      return value;
    }
    let x = filteredString.toLowerCase();

    let products = [];
    for (const product of value) {
      let brand = product.brand;
      brand = brand.toLowerCase();
      if (brand.includes(x)) {
        products.push(product);
      }
    }
    //`\\b${replaceThis}\\b`
    // // String with some numbers
    // const str = "Hello12345World!";

    // // Regular expression
    // const regex = /\d/;

    // // Check if string contians numbers
    // const doesItHaveNumber = regex.test(str);

    // console.log(doesItHaveNumber); // true

    // /\b\w+\b/i.test("bLAH")
    //console.log(filteredString);
    // var re = new RegExp("^([a-z0-9]{5,})$");
    // if (re.test(term)) {
    console.log(products);
    return products;
  }
}
