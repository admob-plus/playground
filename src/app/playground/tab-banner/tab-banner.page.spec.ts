import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBannerPage } from './tab-banner.page';

describe('TabBannerPage', () => {
  let component: TabBannerPage;
  let fixture: ComponentFixture<TabBannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
