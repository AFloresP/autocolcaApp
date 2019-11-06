import { Component, OnInit } from '@angular/core';
import { Restaurant } from "../models/Restaurant";
import { RestaurantService } from "../services/restaurant.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants_ar: Restaurant[];

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Restaurant;
      })
    });
  }

}
