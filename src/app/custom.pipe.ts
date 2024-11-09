import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args: string) {
    return value + args;
  }

}

@Pipe({
  name: 'add',
  standalone: true,
  pure : false
})
export class AddPipe implements PipeTransform {

  transform(value: number, args: number) {
    return value + args;
  }

}
