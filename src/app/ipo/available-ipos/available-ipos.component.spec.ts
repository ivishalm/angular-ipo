import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableIposComponent } from './available-ipos.component';

describe('AvailableIposComponent', () => {
  let component: AvailableIposComponent;
  let fixture: ComponentFixture<AvailableIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
