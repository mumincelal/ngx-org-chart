import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export type Avatar = {
  src?: string;
  fallback: string;
};

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ngx-org-chart-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent implements OnInit {
  @Input() src?: string;
  @Input() fallback!: string;

  ngOnInit(): void {}
}
