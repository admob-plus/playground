import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';

import { IAdRequest } from '@admob-plus/core';

const convertBoolean = s => {
  switch (s) {
    case 'undefined':
      return undefined;
    default:
      return s === 'true';
  }
};

@Component({
  selector: 'app-ad-request-options',
  templateUrl: './ad-request-options.component.html',
  styleUrls: ['./ad-request-options.component.scss']
})
export class AdRequestOptionsComponent implements OnInit {
  @Input() childDirected: boolean | undefined;
  @Input() underAgeOfConsent: boolean | undefined;
  @Output() adRequestChange = new EventEmitter<IAdRequest>();

  constructor() { }

  ngOnInit() {
  }

  get childDirectedString() {
    return String(this.childDirected);
  }

  get underAgeOfConsentString() {
    return String(this.underAgeOfConsent);
  }

  changeChildDirected($event) {
    this.childDirected = convertBoolean($event.target.value);
    this.triggerChange();
  }

  changeUnderAgeOfConsent($event) {
    this.underAgeOfConsent = convertBoolean($event.target.value);
    this.triggerChange();
  }

  triggerChange() {
    this.adRequestChange.emit({
      id: 'test',
      childDirected: this.childDirected,
      underAgeOfConsent: this.underAgeOfConsent
    });
  }
}
