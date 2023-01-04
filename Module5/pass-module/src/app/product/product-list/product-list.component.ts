import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p = 1;
  productList: Product[] = [];
  temp: Product = {};
  searchCustomer: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.productService.getAll().subscribe(data => {
      this.productList = data;
    });
  }

  delete(): void {
    this.productService.deleteById(this.temp.id).subscribe(data => {
      alert('Delete success!!!');
      this.ngOnInit();
    });
  }

  onSearch(): void {
    console.log(this.searchCustomer.value);
    this.productService.getAll(this.searchCustomer.value.name).subscribe(data => {
      this.productList = data;
    });
  }
}
