import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRewardVideoPage } from './tab-reward-video.page';

describe('TabRewardVideoPage', () => {
  let component: TabRewardVideoPage;
  let fixture: ComponentFixture<TabRewardVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRewardVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRewardVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
