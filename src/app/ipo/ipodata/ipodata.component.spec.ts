import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpodataComponent } from './ipodata.component';

describe('IpodataComponent', () => {
  let component: IpodataComponent;
  let fixture: ComponentFixture<IpodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
