import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrenciesService } from '../services/currencies.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule,
    TooltipModule,
    DropdownModule, InputTextModule],
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  @Input() hiddenDetails!: boolean;
  fromAmount: any[] = [];
  toAmount: any[] = [];
  disableFromAmount = true;
  disableToAmount = true;
  formCurrencies!: FormGroup;
  rateFrom: any = "";
  rateTo: any = "";
  textFrom = "";
  textTo = "";
  private route = inject(Router);
  private currenciesService = inject(CurrenciesService);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.formCurrencies = this.fb.group({
      amount: ["", Validators.required],
      from: ["", Validators.required],
      to: ["", Validators.required]
    })
    this.currenciesService.getRates().subscribe((data: any) => {
      console.log("currenciesService", data);
      debugger;
      Object.entries(data).forEach(([key, val]: any) => {

        this.fromAmount.push({ name: key, rate: val })
        this.toAmount.push({ name: key, rate: val });
        if (key === 'EUR') {
          this.formCurrencies.get("from")?.setValue({ name: key, rate: val });
          this.textFrom = "EUR";

        }
        if (key === 'USD') {
          this.formCurrencies.get("to")?.setValue({ name: key, rate: val });
          this.textTo = "USD";

        }
      })
    });
  }
  submit() {
    if (this.formCurrencies.valid) {
      this.rateFrom = this.formCurrencies.get("amount")?.value;

      this.rateTo = this.formCurrencies.get("amount")?.value * (this.formCurrencies.get("from")?.value.rate * this.formCurrencies.get("to")?.value.rate);
      this.textFrom = this.formCurrencies.get("from")?.value.name;
      this.textTo = this.formCurrencies.get("to")?.value.name;
      this.currenciesService.convert(this.formCurrencies.get("from")?.value.name, this.formCurrencies.get("to")?.value.name, this.formCurrencies.get("amount")?.value).subscribe(data => {
        debugger;
      })
    } else {
      this.formCurrencies.get("amount")?.markAsDirty();
      this.formCurrencies.get("from")?.markAsDirty();
      this.formCurrencies.get("to")?.markAsDirty();

    }
  }
  moreDetails() {
    this.route.navigate(["/" + this.textFrom])
  }
}
