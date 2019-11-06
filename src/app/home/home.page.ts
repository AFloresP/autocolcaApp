import { Component } from '@angular/core';
import { GalleryImage } from '../models/GalleryImage';
import { GalleryService } from "../services/gallery.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gallery_ar: GalleryImage[];

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getImages().subscribe(data => {
      this.gallery_ar = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as GalleryImage;
      })
    });
  }

}
