import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CityService } from '../services/city.service';
import { City } from '../Models/city';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Photo } from '../Models/photo';
/* 
  Servisimizi kullanmak için @componentte bir providers alanı açmamız ve servisimizi buraya eklememiz gerekir.
*/

@Component({
  selector: 'app-cityDetail',
  templateUrl: './cityDetail.component.html',
  styleUrls: ['./cityDetail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private cityService:CityService) { }

  /* 
      Oluşturulan bu component city detaylarını ve city fotoğraflarını gösterecektir. Dolayısıyla bize gelecek olan bir parametre var.

      Bu parametre almamız için ActivatedRoute servisinden yaranlanıyoruz. Bu servis bütün parametrelere ulaşmamızı sağlıyor. getCitybyId
      fonksiyonuna cityId parametresini geçebiliyoruz.

  */

  city:City;
  photos:Photo[]=[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getCityById(params["cityId"]);
    })
  }
  getCityById(cityId){
    this.cityService.getCityById(cityId).subscribe(data=>{
      this.city =  data;
      this.getPhotoByCity(cityId); 
    });
  }

  getPhotoByCity(cityId){
    this.cityService.getPhotoByCity(cityId).subscribe(data=>{
      this.photos = data;
      this.setGallery();
    })
  }

  /*
      getGallery fonksiyonu yazılma sebebi NgxGallery modulünün resimleri almak için bir formatının bulunmasıdır.
      
      Veritabanından alınan resimleri getGalley fonksiyonuyla NgxGallerynin istediği formata çekeibliriz.
   */

  getGallery(){
    const imageUrls=[];
    for(let i=0; i< this.city.photos.length; i++){
      imageUrls.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url
      })
    }
    return imageUrls;
  }

  setGallery(){
    this.galleryOptions = [
      {
          width: '100%',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = this.getGallery();
  }

}
