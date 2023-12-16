import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
export class UserCardComponent implements OnInit, AfterViewChecked {
  @Input({ required: true }) fullname!: string;
  @Input({ required: true }) title!: string;
  @Input() avatarUrl?: string;

  @ViewChild('userCard', { static: false }) userCard!: ElementRef;

  abbreviation!: string;

  getAbbreviation(value: string): string {
    return value
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  getPosition() {
    return {
      left: this.userCard.nativeElement.offsetLeft,
      top: this.userCard.nativeElement.offsetTop,
      right:
        this.userCard.nativeElement.offsetLeft +
        this.userCard.nativeElement.offsetWidth,
      bottom:
        this.userCard.nativeElement.offsetTop +
        this.userCard.nativeElement.offsetHeight,
      width: this.userCard.nativeElement.offsetWidth,
      height: this.userCard.nativeElement.offsetHeight,
    };
  }

  ngOnInit(): void {
    this.abbreviation = this.getAbbreviation(this.fullname);
  }

  ngAfterViewChecked(): void {
    console.log(this.userCard.nativeElement.getBoundingClientRect());
  }
}
