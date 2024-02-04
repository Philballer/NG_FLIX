import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp',
  standalone: true,
})
export class RoundUpPipe implements PipeTransform {
  transform(value: number | string): unknown {
    if (typeof value === 'string') {
      value = parseInt(value);
    }
    return Math.ceil(value * 10) / 10;
  }
}
