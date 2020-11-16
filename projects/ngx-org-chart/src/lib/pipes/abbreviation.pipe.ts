import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abbreviation' })
export class AbbreviationPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const matches = value.match(/\b(\w)/g);
      const acronym = matches.join('').toUpperCase();

      return acronym;
    }

    return '';
  }
}
