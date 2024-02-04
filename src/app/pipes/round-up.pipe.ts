import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp',
  standalone: true,
})
export class RoundUpPipe implements PipeTransform {
  transform(value?: number | string): unknown {
    if (!value) {
      return 0;
    }
    let answer = 0;

    if (typeof value === 'string') {
      value = parseInt(value);
      answer = Math.ceil(value * 10) / 10;
    }

    if (typeof value === 'number') {
      answer = Math.ceil(value * 10) / 10;
    }

    return answer;
  }
}
