import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers:any={token:localStorage.getItem('_token')};

  constructor(private _HttpClient: HttpClient) { }
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId },

      );

  }
  getCart():Observable<any>{
    return this._HttpClient.get( `https://ecommerce.routemisr.com/api/v1/cart`,)
  }
  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,)
  }
  updateCartProduct(idProduct:string,newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProduct}`,{
      count:newCount
    },

    )
  }
  checkOut(cartId:string,userData:object):Observable <any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress:userData
    },)
  }
}
