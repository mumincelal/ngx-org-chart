import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartNodeComponent } from './ngx-chart-node.component';
import { NgxChartNodeRoutingModule } from './ngx-chart-node-routing.module';

@NgModule({
  declarations: [
    NgxChartNodeComponent
  ],
  imports: [
    BrowserModule,
    NgxChartNodeRoutingModule
  ],
  bootstrap: [NgxChartNodeComponent],
  exports: [NgxChartNodeComponent]
})
export class NgxChartNodeModule { }
