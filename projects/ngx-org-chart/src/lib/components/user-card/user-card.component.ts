import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

export type User = {
  fullname: string;
  title: string;
  avatarUrl?: string;
};

@Component({
  standalone: true,
  imports: [AvatarComponent],
  selector: 'ngx-org-chart-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() fullname!: string;
  @Input() title!: string;
  @Input() avatarUrl?: string;

  getAbbreviation(value: string): string {
    return value
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
