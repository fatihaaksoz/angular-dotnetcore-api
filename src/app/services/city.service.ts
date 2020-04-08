import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../Models/city';
import { Observable } from 'rxjs';
import { Photo } from '../Models/photo';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient ,private alertifyService:AlertifyService, private route:Router) { }

  path:string ="http://localhost:51144/api/";

  /*

    !!! İP TARAFINDAKİ PARAMETRE ADI PATH KISMINDAKİ PARAMETRE ADIYLA AYNI OLMALIDIR.VERİ BU PATH E GÖRE GELİR.
   */  
  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.path+"cities");
  }

  getCityById(cityId):Observable<City>{
    return this.httpClient.get<City>(this.path+"cities/detail/?id="+cityId);
  }
  getPhotoByCity(cityId):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"cities/photos/?id="+cityId)
  }

  //Ekleme İşlemi
  add(city){
    this.httpClient.post(this.path+"cities/add",city).subscribe(data=>{
      this.alertifyService.success("Şehir başarıyla eklenmiştir.")
      this.route.navigateByUrl('/cityDetail/'+ data["id"])
    });
  }
}
