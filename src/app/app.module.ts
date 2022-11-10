import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultipleAPIComponent } from './multiple-api/multiple-api.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PricelistComponent } from './pricelist/pricelist.component';
import { SearchinputComponent } from './searchinput/searchinput.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleAPIComponent,
    FilterPipe,
    PricelistComponent,
    SearchinputComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
