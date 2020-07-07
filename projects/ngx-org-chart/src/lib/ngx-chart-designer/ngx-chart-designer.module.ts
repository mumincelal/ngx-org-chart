import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxChartNodeModule } from '../ngx-chart-node/ngx-chart-node.module';
import { NgxChartDesignerComponent } from './ngx-chart-designer.component';

@NgModule({
  declarations: [
    NgxChartDesignerComponent
  ],
  imports: [
    CommonModule,
    NgxChartNodeModule
  ],
  bootstrap: [NgxChartDesignerComponent],
  exports: [NgxChartDesignerComponent]
})
export class NgxChartDesignerModule { }
