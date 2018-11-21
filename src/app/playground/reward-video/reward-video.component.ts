import { Component, OnInit } from '@angular/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-reward-video',
  templateUrl: './reward-video.component.html',
  styleUrls: ['./reward-video.component.scss']
})
export class RewardVideoComponent implements OnInit {

  constructor(private admob: AdMob) { }

  ngOnInit() {
  }

  load() {
    this.admob.rewardVideo.load({ id: 'test' }).catch(console.log);
  }

  show() {
    this.admob.rewardVideo.show().catch(console.log);
  }
}
