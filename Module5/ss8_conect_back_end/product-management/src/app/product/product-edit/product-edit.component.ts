import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {IProduct} from '../../model/i-product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  product: IProduct = {};

  constructor(private productService: ProductService, private active: ActivatedRoute, private route: Router) {
    this.active.paramMap.subscribe(data => {
      const id = data.get('id');
      console.log(id);
      if (id != null) {
        this.product = this.productService.findById(parseInt(id));
        this.productForm = new FormGroup(
          {
            id: new FormControl(this.product.id),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            description: new FormControl(this.product.description),
          });
      }
    }, error => {
    }, () => {
    });

  }

  ngOnInit(): void {
  }

  updateProduct() {
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product.id, this.product);
    this.route.navigateByUrl('');
  }

}
