import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxOrgChartModule } from './ngx-org-chart/ngx-org-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgxOrgChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
