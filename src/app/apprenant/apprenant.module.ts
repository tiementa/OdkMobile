import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprenantPageRoutingModule } from './apprenant-routing.module';

import { ApprenantPage } from './apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprenantPageRoutingModule
  ],
  declarations: [ApprenantPage]
})
export class ApprenantPageModule {}
