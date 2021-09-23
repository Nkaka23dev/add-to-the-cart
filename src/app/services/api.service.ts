import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url="https://fakestoreapi.com/products/"

  constructor(private _http:HttpClient) { }  
  
  getProduct():Observable<any>{
   return this._http.get<any>(this._url,{responseType:"json"}).
   pipe(map((res:any)=>{
    return res
   }))
  }


}
