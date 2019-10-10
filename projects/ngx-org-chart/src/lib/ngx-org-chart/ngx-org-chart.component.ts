import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: ['./ngx-org-chart.component.scss']
})
export class NgxOrgChartComponent {

  @Input()
  topNode: INode;

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() itemClick = new EventEmitter<INode>();

  @HostBinding('style.flex-direction')
  get hostClass() {
    return this.direction === 'vertical' ? 'column' : '';
  }
}
