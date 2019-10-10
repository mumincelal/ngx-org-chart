import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-designer',
  templateUrl: './ngx-chart-designer.component.html',
  styleUrls: ['./ngx-chart-designer.component.scss']
})
export class NgxChartDesignerComponent {

  @Input()
  node: INode;

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
