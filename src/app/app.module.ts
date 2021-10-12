import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicRestService } from './ionic-rest.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, 
              IonicModule.forRoot(),
              AppRoutingModule,
              AppRoutingModule,
              HttpClientModule,
             ],


  providers: [IonicRestService,HttpClientModule, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
