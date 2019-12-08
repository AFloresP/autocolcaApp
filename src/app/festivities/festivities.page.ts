import { Component, OnInit } from '@angular/core';
import { Festivity } from "../models/Festivity";
import { FestivityService } from "../services/festivity.service";

@Component({
  selector: 'app-festivities',
  templateUrl: './festivities.page.html',
  styleUrls: ['./festivities.page.scss'],
})
export class FestivitiesPage implements OnInit {

  festivities_ar: Festivity[];

  constructor(public festivityService: FestivityService) { }

  ngOnInit() {
    this.festivityService.getFestivities().subscribe(data => {
      this.festivities_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Festivity;
      })
    });
  }

}
