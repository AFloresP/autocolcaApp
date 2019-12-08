import { Component, OnInit } from '@angular/core';
import { Hotel } from "../models/Hotel";
import { HotelService } from "../services/hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  hotels_ar: Hotel[];

  constructor(public hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Hotel;
      })
    });
  }

}
