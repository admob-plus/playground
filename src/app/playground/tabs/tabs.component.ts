import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabs } from '@ionic/angular';

@Component({
  selector: 'playground-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @ViewChild(Tabs) tabs: Tabs;

  constructor() { }

  ngOnInit() {
    this.tabs.select('banner');
  }

}
