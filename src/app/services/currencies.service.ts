import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  private http = inject(HttpClient);


  constructor() { }
  getRates() {
    return this.http.get("http://data.fixer.io/api/latest?access_key=d8ee70d6071423cb9cb2789e7892ff64").pipe(map((data: any) => {
      return data.rates
    }))
  }
  getPopularCurrency() {
    return this.http.get("http://data.fixer.io/api/symbols?access_key=d8ee70d6071423cb9cb2789e7892ff64").pipe(map((data: any) => {
      debugger;
      return data.symbols
    }))
  }
  convert(from: string, to: string, amount: number) {
    debugger;

    return this.http.get(`
      http://data.fixer.io/api/convert?access_key=d8ee70d6071423cb9cb2789e7892ff64&from=${from}&to=${to}&amount=${amount}`).pipe(map((response: any) => {
      debugger;

      return response.rates
    }))
  }
  fetchHistoricalData(from: string, to: string) {

    return this.http.get(`http://data.fixer.io/api/timeseries?access_key=d8ee70d6071423cb9cb2789e7892ff64&start_date=2012-05-01&end_date=2012-05-25`).pipe(map((response: any) => {
      debugger;

      return response.rates
    }))
  }
  updateChart(months: string[], rates: number[]) {
    // الكود السابق لإنشاء الرسم البياني
  }

  getLastYear() {
    const today = new Date();
    return today.getFullYear() - 1;
  }

  getCurrentMonth() {
    const today = new Date();
    return (today.getMonth() + 1).toString().padStart(2, '0');
  }

  getCurrentDay() {
    const today = new Date();
    return today.getDate().toString().padStart(2, '0');
  }
}
