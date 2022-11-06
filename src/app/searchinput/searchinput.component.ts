import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.css'],
})
export class SearchinputComponent implements OnInit {
  constructor() {}
  filteredString: any;
  inputChange() {}
  ngOnInit(): void {}
}
