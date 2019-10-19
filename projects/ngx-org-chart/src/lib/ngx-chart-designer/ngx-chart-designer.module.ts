import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartNodeModule } from '../ngx-chart-node/ngx-chart-node.module';
import { NgxChartDesignerComponent } from './ngx-chart-designer.component';

@NgModule({
  declarations: [
    NgxChartDesignerComponent
  ],
  imports: [
    BrowserModule,
    NgxChartNodeModule
  ],
  bootstrap: [NgxChartDesignerComponent],
  exports: [NgxChartDesignerComponent]
})
export class NgxChartDesignerModule { }
