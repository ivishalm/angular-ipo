import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedIposComponent } from './applied-ipos.component';

describe('AppliedIposComponent', () => {
  let component: AppliedIposComponent;
  let fixture: ComponentFixture<AppliedIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
