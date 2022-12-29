import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../model/i-product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  temp: IProduct = {};

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
