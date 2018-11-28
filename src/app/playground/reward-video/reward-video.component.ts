import { Component, OnInit } from '@angular/core';
import { IAdRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-reward-video',
  templateUrl: './reward-video.component.html',
  styleUrls: ['./reward-video.component.scss']
})
export class RewardVideoComponent implements OnInit {
  private adRequest: IAdRequest;

  constructor(private admob: AdMob) {
    this.adRequest = {id: 'test'};
  }

  ngOnInit() {
  }

  onAdRequestChange(adRequest) {
    this.adRequest = adRequest;
  }

  load() {
    this.admob.rewardVideo.load(this.adRequest).catch(console.log);
  }

  show() {
    this.admob.rewardVideo.show().catch(console.log);
  }
}
