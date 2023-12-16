import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  User,
  UserCardComponent,
} from './components/user-card/user-card.component';
import { ArrowComponent } from './components/arrow/arrow.component';

@Component({
  standalone: true,
  imports: [UserCardComponent, ArrowComponent],
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrl: './ngx-org-chart.component.css',
})
export class NgxOrgChartComponent implements AfterViewInit {
  @Input({ required: true }) user!: User;

  @ViewChild('ngxOrgUserCard') ngxOrgUserCard!: UserCardComponent;

  startPosition = { x: 0, y: 0 };
  endPosition = { x: 0, y: 0 };

  ngAfterViewInit(): void {
    const userCardRectangle = this.ngxOrgUserCard.getPosition();

    this.startPosition = {
      x: userCardRectangle.left + userCardRectangle.width / 2,
      y: userCardRectangle.bottom,
    };
  }
}
