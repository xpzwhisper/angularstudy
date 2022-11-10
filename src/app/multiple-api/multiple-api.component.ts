import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css'],
})
export class MultipleAPIComponent implements OnInit {
  constructor(public http: HttpClient) {}

  selectedProduct: any;

  @Input() productsHtml: any;

  ngOnInit(): void {}
}
