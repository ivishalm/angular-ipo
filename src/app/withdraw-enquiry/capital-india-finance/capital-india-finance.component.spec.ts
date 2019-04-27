import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalIndiaFinanceComponent } from './capital-india-finance.component';

describe('CapitalIndiaFinanceComponent', () => {
  let component: CapitalIndiaFinanceComponent;
  let fixture: ComponentFixture<CapitalIndiaFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalIndiaFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalIndiaFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
