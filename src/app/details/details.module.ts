import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsCurrencyComponent } from './components/details-currency/details-currency.component';
import { ConvertComponent } from '../convert/convert.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    DetailsCurrencyComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ConvertComponent,
    HeaderComponent,

  ],
})
export class DetailsModule { }
