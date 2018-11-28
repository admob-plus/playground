import { Component, OnInit } from '@angular/core';
import { IAdRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {
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
    this.admob.interstitial.load(this.adRequest).catch(console.log);
  }

  show() {
    this.admob.interstitial.show().catch(console.log);
  }
}
