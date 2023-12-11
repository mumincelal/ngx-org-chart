import { Component, Input } from '@angular/core';
import {
  User,
  UserCardComponent,
} from './components/user-card/user-card.component';

@Component({
  standalone: true,
  imports: [UserCardComponent],
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrl: './ngx-org-chart.component.css',
})
export class NgxOrgChartComponent {
  @Input() user!: User;
}
