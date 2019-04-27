import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsbaregistrationComponent } from './hsbaregistration.component';

describe('HsbaregistrationComponent', () => {
  let component: HsbaregistrationComponent;
  let fixture: ComponentFixture<HsbaregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsbaregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsbaregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
