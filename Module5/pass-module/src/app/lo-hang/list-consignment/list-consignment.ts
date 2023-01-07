import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Consignment} from '../../model/consignment';
import {ConsignmentService} from '../../service/consignment.service';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-consignment',
  templateUrl: './list-consignment.html',
  styleUrls: ['./list-consignment.component.css']
})
export class ListConsignment implements OnInit {
  consignments: Consignment[] = [];
  products: Product[] = [];
  temp: Consignment = {};
  tempedit: Consignment = {};


  constructor(private consignmentService: ConsignmentService, private productService: ProductService,
              private router: Router) {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      this.products.push({proId: -1, productName: '---Choosen---'});
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.consignmentService.getAll().subscribe(data => {
      this.consignments = data.content;
      console.log(this.consignments);
    });
  }

  delete(): void {
    this.consignmentService.deleteById(this.temp.id).subscribe(data => {
      alert('Xóa thành công !!!');
      this.ngOnInit();
    });
  }

  creatGoods($event: any) {
    console.log($event);
    // @ts-ignore
    this.consignmentService.save($event).subscribe(data => {
      alert('Create is success!!!');
      this.ngOnInit();
    });
  }

  // onSearch(value: string, value2: string) {
  //   this.consignmentService.getAll().subscribe(data => {
  //     this.consignments = data.content;
  //   });
  // }

  editGoods($event: any) {
    this.ngOnInit();
  }
}
