import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../Models/value';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {


  values:Value[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.getValues();
  }

  getValues(){
    return this.http.get<Value[]>("http://localhost:51144/api/values").subscribe(data=>{
        this.values= data;
    })
  }

}
