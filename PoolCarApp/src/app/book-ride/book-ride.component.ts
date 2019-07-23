import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  clicked:boolean=true;
  rideDetails=[{id:1,"offerId":"ABC","name":"sang","car":"mercedes","seatsLeft":2,"pickUp":"Gotham","destination":"PTP"},
              {id:2,"offerId":"ABCD","name":"John","car":"mercedesBenz","seatsLeft":3,"pickUp":"PTP","destination":"Gotham"},
              {id:3,"offerId":"AB","name":"Doe","car":"Swift","seatsLeft":2,"pickUp":"VaniVihar","destination":"Gotham"},
              {id:4,"offerId":"ABD","name":"Dove","car":"Fasicno","seatsLeft":4,"pickUp":"VaniVihar","destination":"AcharyaVihar"}]
  constructor() { }

  ngOnInit() {
  }

}
