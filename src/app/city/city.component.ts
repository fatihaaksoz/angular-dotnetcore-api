import { Component, OnInit } from '@angular/core';
import { City } from '../Models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers:[CityService]
  
})
export class CityComponent implements OnInit {

  /* Öncelikle fronted kısmı için döndürülecek dataların sağlandığı bir api ortamı oluşturuldu(.Net Core).

  Daha sonra solid prensibine dayanarak gelen dataları fronted ortamında da modellere bağlamamız gerekir.

  - Modeller oluşturuldu.
  - City veya başka herhangi bir modeli çekiceğimiz kodu bir servis olarak yazmalıyız. Örneğim city componentinde city datasını 
  çekmek için gerekli http kodlarını yazdık. Fakat city datasını başka componentlerde de kullanabiliriz. Farklı componentlerde
  kullanabilmek için gereken servis yazılmalıdır. Kod tekrarı önlenir.
  

  */


  constructor(private cityService: CityService ) { }

  cities:City[]

  ngOnInit() {

    this.cityService.getCities().subscribe(data=>{
      this.cities = data;
    })
  }

}
