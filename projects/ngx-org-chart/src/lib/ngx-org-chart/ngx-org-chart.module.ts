import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxChartDesignerModule } from '../ngx-chart-designer/ngx-chart-designer.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';

@NgModule({
  declarations: [
    NgxOrgChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartDesignerModule
  ],
  bootstrap: [NgxOrgChartComponent],
  exports: [NgxOrgChartComponent]
})
export class NgxOrgChartModule { }
