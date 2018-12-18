import { Component, OnInit } from '@angular/core';
import { IBannerRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tab-banner',
  templateUrl: './tab-banner.page.html',
  styleUrls: ['./tab-banner.page.scss'],
})
export class TabBannerPage implements OnInit {
  private adRequest: IBannerRequest;

  constructor(private admob: AdMob) {
    this.adRequest = {id: environment.banner};
  }

  ngOnInit() {
  }

  onAdRequestChange(adRequest) {
    this.adRequest = adRequest;
  }

  show() {
    this.admob.banner.show(this.adRequest).catch(console.log);
  }

  hide() {
    this.admob.banner.hide(this.adRequest.id);
  }
}
