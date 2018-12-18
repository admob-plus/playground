import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AdRequestOptionsComponent } from './ad-request-options.component';

@NgModule({
  declarations: [AdRequestOptionsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [AdRequestOptionsComponent],
})
export class AdRequestOptionsModule { }
