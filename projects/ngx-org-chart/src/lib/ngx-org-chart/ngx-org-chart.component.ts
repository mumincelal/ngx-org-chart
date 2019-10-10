import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: ['./ngx-org-chart.component.scss']
})
export class NgxOrgChartComponent {

  @Input()
  nodes: INode[];

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() itemClick = new EventEmitter<INode>();
}
