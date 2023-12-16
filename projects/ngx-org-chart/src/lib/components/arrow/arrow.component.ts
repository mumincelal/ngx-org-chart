import { Component, Input, OnInit } from '@angular/core';

export type Position = {
  x: number;
  y: number;
};

@Component({
  standalone: true,
  selector: 'ngx-org-chart-arrow',
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.css',
})
export class ArrowComponent implements OnInit {
  @Input({ required: true }) startPosition!: Position;
  @Input({ required: true }) endPosition!: Position;

  ngOnInit(): void {}
}
