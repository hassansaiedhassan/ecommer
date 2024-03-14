import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
baseUrl:string=`https://ecommerce.routemisr.com`
  constructor(private _HttpClient:HttpClient) { }
  addToWhish(productId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`/api/v1/wishlist`,{
      productId:productId
    })
  }
  gitAWhish():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/wishlist`)
  }
  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+`/api/v1/wishlist/${productId}`)
  }

}
