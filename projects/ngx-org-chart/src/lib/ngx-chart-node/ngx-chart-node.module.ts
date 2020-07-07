import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxChartNodeComponent } from './ngx-chart-node.component';

@NgModule({
  declarations: [
    NgxChartNodeComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [NgxChartNodeComponent],
  exports: [NgxChartNodeComponent]
})
export class NgxChartNodeModule { }
