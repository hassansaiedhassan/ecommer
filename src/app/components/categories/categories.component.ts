import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private _EcomdataService:EcomdataService){

  }
  categories:any[]=[];
  ngOnInit(): void {
    this._EcomdataService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categories=res.data
      }
    })
  }
}
