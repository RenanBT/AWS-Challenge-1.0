import { Component, OnInit } from '@angular/core';
import { DeleteCategoryService } from 'src/app/components/category/create-category.service';
import { CreateCategoryService } from 'src/app/components/category/create-category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}
