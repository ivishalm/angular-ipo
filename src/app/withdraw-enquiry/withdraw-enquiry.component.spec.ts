import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawEnquiryComponent } from './withdraw-enquiry.component';

describe('WithdrawEnquiryComponent', () => {
  let component: WithdrawEnquiryComponent;
  let fixture: ComponentFixture<WithdrawEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
