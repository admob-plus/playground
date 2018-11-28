import { Component, OnInit } from '@angular/core';
import { IAdRequest } from '@admob-plus/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  private adRequest: IAdRequest;

  constructor(private admob: AdMob) {
    this.adRequest = {id: 'test'};
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
    this.admob.banner.hide();
  }
}
