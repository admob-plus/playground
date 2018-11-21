import { Component, OnInit } from '@angular/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss']
})
export class InterstitialComponent implements OnInit {

  constructor(private admob: AdMob) { }

  ngOnInit() {
  }

  load() {
    this.admob.interstitial.load({ id: 'test' }).catch(console.log);
  }

  show() {
    this.admob.interstitial.show().catch(console.log);
  }
}
