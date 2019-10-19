import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartNodeComponent } from './ngx-chart-node.component';

@NgModule({
  declarations: [
    NgxChartNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [NgxChartNodeComponent],
  exports: [NgxChartNodeComponent]
})
export class NgxChartNodeModule { }
