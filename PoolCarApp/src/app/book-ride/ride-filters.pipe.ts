import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilters'
})
export class RideFiltersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
