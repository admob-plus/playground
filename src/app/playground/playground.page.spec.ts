import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundPage } from './playground.page';

describe('PlaygroundPage', () => {
  let component: PlaygroundPage;
  let fixture: ComponentFixture<PlaygroundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
