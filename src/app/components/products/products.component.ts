import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: any; 

  constructor(private _api:ApiService) { }

  ngOnInit(): void { 
  this.getProducts()
  } 
 getProducts=()=>{
   this._api.getProduct().subscribe((response:any)=>{
    this.products=response  
   },
   error=>{
     console.log("error:",error)
   })
 }

}
