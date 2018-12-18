import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInterstitialPage } from './tab-interstitial.page';

describe('TabInterstitialPage', () => {
  let component: TabInterstitialPage;
  let fixture: ComponentFixture<TabInterstitialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInterstitialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInterstitialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
