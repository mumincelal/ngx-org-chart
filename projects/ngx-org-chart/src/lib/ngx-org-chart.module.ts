import { NgModule } from '@angular/core';
import { AvatarModule } from './components/avatar/avatar.module';
import { CardModule } from './components/card/card.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';

@NgModule({
  imports: [AvatarModule, CardModule],
  declarations: [NgxOrgChartComponent],
  exports: [NgxOrgChartComponent]
})
export class NgxOrgChartModule {}
