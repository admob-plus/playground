import { Component, OnInit } from '@angular/core';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private admob: AdMob) { }

  ngOnInit() {
  }

  show() {
    this.admob.banner.show({ id: 'test' }).catch(console.log);
  }

  hide() {
    this.admob.banner.hide();
  }
}
