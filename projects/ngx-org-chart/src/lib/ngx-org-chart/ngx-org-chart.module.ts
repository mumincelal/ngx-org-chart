import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartDesignerModule } from '../ngx-chart-designer/ngx-chart-designer.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';

@NgModule({
  declarations: [
    NgxOrgChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartDesignerModule
  ],
  bootstrap: [NgxOrgChartComponent],
  exports: [NgxOrgChartComponent]
})
export class NgxOrgChartModule { }
