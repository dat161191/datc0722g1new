import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {IProduct} from '../../model/i-product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  id: number | undefined;
  product: IProduct | null = {};

  constructor(private productService: ProductService, private active: ActivatedRoute, private route: Router) {
    this.active.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
      if (this.id != null) {
        this.getProduct(this.id);
      }
    }, error => {
    }, () => {
    });
    this.productForm = new FormGroup(
      {
        id: new FormControl(this.product?.id),
        name: new FormControl(this.product?.name),
        price: new FormControl(this.product?.price),
        description: new FormControl(this.product?.description)
      }
    );
  }

  ngOnInit(): void {
  }

  updateProduct(): void {
    this.product = this.productForm.value;
    // @ts-ignore
    this.productService.updateProduct(this.product.id, this.product).subscribe(data => {
      this.route.navigateByUrl('/product/list');
      alert('Chỉnh sửa thành công!!!');
    });
  }

  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }
}
