import { Component, OnInit } from '@angular/core';
import {RideFiltersPipe} from './ride-filters.pipe';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css'],
  providers:[RideFiltersPipe]
})
export class BookRideComponent implements OnInit {
  clicked:boolean=true;
  constructor(private rideFilters: RideFiltersPipe) {}
  rideDetails=[{id:1,offerId:"ABC",name:"sang",car:"mercedes",seatsLeft:2,pickUp:"Gotham",destination:"PTP"},
              {id:2,offerId:"ABCD",name:"John",car:"mercedesBenz",seatsLeft:3,pickUp:"PTP",destination:"Gotham"},
              {id:3,offerId:"AB",name:"Doe",car:"Swift",seatsLeft:2,pickUp:"VaniVihar",destination:"Gotham"},
              {id:4,offerId:"ABD",name:"Dove",car:"Fasicno",seatsLeft:4,pickUp:"VaniVihar",destination:"AcharyaVihar"}]

  temp=this.rideDetails;
  
  rideNew=[];
  changeTableWithEndToStart(params){
    console.log(typeof this.rideDetails, this.rideDetails.length ,this.rideDetails);
    this.rideNew=this.rideFilters.transform(this.rideDetails,params);
      if(this.rideNew){
        this.rideDetails=this.rideNew;
      }
   }
  
   
  
  

  ngOnInit() {
  }

}
