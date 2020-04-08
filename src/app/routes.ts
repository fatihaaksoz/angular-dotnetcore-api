import { Component } from '@angular/core'
import { CityComponent } from './city/city.component'
import { ValueComponent } from './value/value.component'
import { Route } from '@angular/compiler/src/core'
import { Routes } from '@angular/router'
import { CityDetailComponent } from './cityDetail/cityDetail.component'
import { CityAddComponent } from './cityAdd/cityAdd.component'
import { RegisterComponent } from './register/register.component'


/* 
    Bu bölümde routing işlemlerini gerçekleştireceğimiz bir dizi tanımlıyoruz. Bunun nedenini açıklamak gerekirse

    fronted tarafında adres çubuğuna city veya value yazmak bir durum söz konusu değildir. Bu işlemler site map(mavbar) 
    yöntemleriyle sağlanır. Bizim navbar a bu aksiyonu vermemiz için routing işlemlerini gerçekleştirmemiz gerekir.

*/

export const appRoutes : Routes = [
    {path:"city", component:CityComponent },
    {path:"value", component:ValueComponent},
    {path:"register", component:RegisterComponent},
    {path:"cityAdd", component:CityAddComponent},
    {path:"cityDetail/:cityId"  ,component:CityDetailComponent},
    {path:"**" ,redirectTo:"city", pathMatch:"full"}
    

]
