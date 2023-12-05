import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'vuela' | 'no Vuela' {
    return value ? 'vuela' : 'no Vuela';
  }

}
