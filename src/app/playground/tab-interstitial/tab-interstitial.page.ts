import { Component, OnInit } from '@angular/core';
import { IAdRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tab-interstitial',
  templateUrl: './tab-interstitial.page.html',
  styleUrls: ['./tab-interstitial.page.scss'],
})
export class TabInterstitialPage implements OnInit {
  private adRequest: IAdRequest;

  constructor(private admob: AdMob) {
    this.adRequest = {id: environment.interstitial};
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
