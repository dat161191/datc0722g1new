import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {CategoryService} from '../../category/category.service';
import {Router} from '@angular/router';
import {Category} from '../../category/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router) {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data;
    });
    this.productForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  // get prod() {
  //   return this.productForm.controls;
  // }

  createProduct(): void {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(data => {
      this.productForm.reset();
      alert('Create success!!!');
    });
  }
}
