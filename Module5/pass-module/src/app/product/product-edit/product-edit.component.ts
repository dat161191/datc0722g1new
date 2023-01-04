import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {CategoryService} from '../../category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private active: ActivatedRoute, private router: Router) {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data;
    });
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('')
    });
    this.active.paramMap.subscribe(data => {
      // @ts-ignore
      const id = +data.get('id');
      if (id != null) {
        this.getProduct(id);
      }
    });
  }

  ngOnInit(): void {
  }

  // get prod() {
  //   return this.productForm.controls;
  // }

  editProduct(): any {
    this.productService.edit(this.productForm.value).subscribe(data => {
      this.router.navigateByUrl('');
      alert('Edit success');
    });

  }


  compare(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


  getProduct(id: number): void {
    this.productService.findById(id).subscribe(data => {
      this.productForm.patchValue(data);
      console.log(this.productForm.value);
    });

  }
}
