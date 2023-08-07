import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCurrenciesComponent } from './convert-currencies.component';

describe('ConvertCurrenciesComponent', () => {
  let component: ConvertCurrenciesComponent;
  let fixture: ComponentFixture<ConvertCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertCurrenciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
