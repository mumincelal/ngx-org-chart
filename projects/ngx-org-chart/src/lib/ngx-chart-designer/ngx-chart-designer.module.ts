import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartNodeModule } from '../ngx-chart-node/ngx-chart-node.module';
import { NgxChartDesignerComponent } from './ngx-chart-designer.component';
import { NgxChartDesignerRoutingModule } from './ngx-chart-designer-routing.module';

@NgModule({
  declarations: [
    NgxChartDesignerComponent
  ],
  imports: [
    BrowserModule,
    NgxChartNodeModule,
    NgxChartDesignerRoutingModule
  ],
  bootstrap: [NgxChartDesignerComponent],
  exports: [NgxChartDesignerComponent]
})
export class NgxChartDesignerModule { }
