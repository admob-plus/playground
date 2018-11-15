import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardVideoComponent } from './reward-video.component';

describe('RewardVideoComponent', () => {
  let component: RewardVideoComponent;
  let fixture: ComponentFixture<RewardVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
