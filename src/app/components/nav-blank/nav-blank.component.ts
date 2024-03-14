
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
constructor(private _Router:Router,private _WishlistService:WishlistService){}
singOut():void{
  localStorage.removeItem('_token');
  this._Router.navigate(['/login']);
}
count:Number=0;
ngOnInit(): void {

this._WishlistService.gitAWhish().subscribe({
  next:(res)=>{
    console.log(res);
    this.count=res.count
  }
})
}


}
