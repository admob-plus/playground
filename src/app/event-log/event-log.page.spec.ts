import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogPage } from './event-log.page';

describe('EventLogPage', () => {
  let component: EventLogPage;
  let fixture: ComponentFixture<EventLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
