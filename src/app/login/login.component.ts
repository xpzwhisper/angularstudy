import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  loginInput = '';
  user = 'Oliver';
  ngOnInit(): void {}

  getresults(nameany: String) {
    return nameany + ' ' + nameany.length.toString();
  }

  checkConditionOfString() {
    return this.loginInput.length > 0 ? true : false;
  }
}
