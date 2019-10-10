import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartDesignerModule } from '../ngx-chart-designer/ngx-chart-designer.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';
import { NgxOrgChartRoutingModule } from './ngx-org-chart-routing.module';

@NgModule({
  declarations: [
    NgxOrgChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartDesignerModule,
    NgxOrgChartRoutingModule
  ],
  bootstrap: [NgxOrgChartComponent],
  exports: [NgxOrgChartComponent]
})
export class NgxOrgChartModule { }
