import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCurrencyComponent } from './details-currency.component';

describe('DetailsCurrencyComponent', () => {
  let component: DetailsCurrencyComponent;
  let fixture: ComponentFixture<DetailsCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
