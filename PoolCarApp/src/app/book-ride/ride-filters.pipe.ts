import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilters'
})
export class RideFiltersPipe implements PipeTransform {

  transform(value: object[], args: string): object[] {
    let rideNewArray=[];
    if(args==='to'){
      console.log("inside To" ,value[1]['destination']);
      for(let i=0;i<value.length;i++){
        if(value[i]['destination']=='Gotham'){
          console.log("inside To Loop");
          rideNewArray.push(value[i]);
        }
      }
      return rideNewArray;
    }
    else if(args==='from'){
      for(let i=0;i<value.length;i++){
        if(value[i]['pickUp']=='Gotham'){
          rideNewArray.push(value[i]);
        }
      }
      return rideNewArray;
    }
    else if(args==='others'){
      for(let i=0;i<value.length;i++){
        if(value[i]['pickUp']!='Gotham' && value[i]['destination']!='Gotham'){
          rideNewArray.push(value[i]);
        }
      }
      return rideNewArray;
    }
  }

}
