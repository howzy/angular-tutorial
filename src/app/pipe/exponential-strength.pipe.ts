import { Pipe, PipeTransform } from '@angular/core';

/**
 * 计算幂次方
 * 默认次方为 1
 * 用法：
 *  value | exponentialStrength: exponent
 * 例子：
 *  {{ 2 | exponentialStrength: 10 }}
 *  返回值为 1024
 */
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
