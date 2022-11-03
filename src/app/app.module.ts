import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignnupComponent } from './signnup/signnup.component';

import { FormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { HttpClientModule } from '@angular/common/http';
import { StylingComponent } from './styling/styling.component';
import { MultipleAPIComponent } from './multiple-api/multiple-api.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignnupComponent,

    BillingComponent,
     StylingComponent,
     MultipleAPIComponent,
     FilterPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
