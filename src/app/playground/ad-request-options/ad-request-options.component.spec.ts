import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRequestOptionsComponent } from './ad-request-options.component';

describe('AdRequestOptionsComponent', () => {
  let component: AdRequestOptionsComponent;
  let fixture: ComponentFixture<AdRequestOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRequestOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRequestOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
