import { Component, inject } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { PopularCurrency } from '../context/DTOs';

@Component({
  selector: 'app-convert-currencies',
  templateUrl: './convert-currencies.component.html',
  styleUrls: ['./convert-currencies.component.scss']
})
export class ConvertCurrenciesComponent {
  popularCurrencies: PopularCurrency[] = [];
  private currenciesService = inject(CurrenciesService);
  ngOnInit() {
    let indexToBreak = 9;
    let currentIndex = 0;
    this.currenciesService.getPopularCurrency().subscribe((data: any) => {
      debugger;

      for (const [key, value] of Object.entries(data)) {
        if (currentIndex === indexToBreak) {
          break; // يتم إيقاف التكرار هنا
        }
        this.popularCurrencies.push({ currencyName: key, currencyValue: value })
        currentIndex++;

      }

    });
  }

}
