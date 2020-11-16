import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image?: string;

  @Input() fullname?: string;

  @Input() title?: string;

  @Input() department?: string;
}
