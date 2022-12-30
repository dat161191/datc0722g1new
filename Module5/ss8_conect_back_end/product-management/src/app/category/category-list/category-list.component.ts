import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];


  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }
}
