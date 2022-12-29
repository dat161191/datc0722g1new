import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../model/i-product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Input()
  product: IProduct = {};


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.deleteById(this.product.id);
  }
}
