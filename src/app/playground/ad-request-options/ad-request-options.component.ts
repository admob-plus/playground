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
  @Input() childDirectedTreatment: boolean | undefined;
  @Input() underAgeOfConsent: boolean | undefined;
  @Output() adRequestChange = new EventEmitter<IAdRequest>();

  constructor() { }

  ngOnInit() {
  }

  get childDirectedTreatmentString() {
    return String(this.childDirectedTreatment);
  }

  get underAgeOfConsentString() {
    return String(this.underAgeOfConsent);
  }

  changeChildDirectedTreatment($event) {
    this.childDirectedTreatment = convertBoolean($event.target.value);
    this.triggerChange();
  }

  changeUnderAgeOfConsent($event) {
    this.underAgeOfConsent = convertBoolean($event.target.value);
    this.triggerChange();
  }

  triggerChange() {
    this.adRequestChange.emit({
      id: 'test',
      childDirectedTreatment: this.childDirectedTreatment,
      underAgeOfConsent: this.underAgeOfConsent
    });
  }
}
