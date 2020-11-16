import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbbreviationPipe } from '../../pipes/abbreviation.pipe';
import { AvatarComponent } from './avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AbbreviationPipe],
  exports: [AvatarComponent]
})
export class AvatarModule {}
