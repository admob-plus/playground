import { Component, OnInit } from '@angular/core';
import { IAdRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-tab-reward-video',
  templateUrl: './tab-reward-video.page.html',
  styleUrls: ['./tab-reward-video.page.scss'],
})
export class TabRewardVideoPage implements OnInit {
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
