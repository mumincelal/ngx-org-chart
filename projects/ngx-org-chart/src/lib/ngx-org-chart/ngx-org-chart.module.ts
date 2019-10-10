import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartNodeModule } from '../ngx-chart-node/ngx-chart-node.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';
import { NgxOrgChartRoutingModule } from './ngx-org-chart-routing.module';

@NgModule({
  declarations: [
    NgxOrgChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartNodeModule,
    NgxOrgChartRoutingModule
  ],
  bootstrap: [NgxOrgChartComponent],
  exports: [NgxOrgChartComponent]
})
export class NgxOrgChartModule { }
