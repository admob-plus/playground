import md5 from 'md5';
import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  constructor(private device: Device) {}

  ngOnInit() {
  }

  get deviceId() {
    return this.device.uuid === null ? 'N/A' : md5(`${this.device.uuid}`).toUpperCase();
  }
}
