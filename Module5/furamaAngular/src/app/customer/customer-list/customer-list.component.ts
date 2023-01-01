import {Component, OnInit} from '@angular/core';
import {Customer} from "../Customer";
import {CustomerType} from "../CustomerType";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  temp: Customer = {}


  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
    }, error => {
    }, () => {
    })
  }

  sendId(id: any) {
    this.customerService.findById(id).subscribe(data => {
      return this.temp = data;
    }, error => {
    }, () => {
    })
  }

  deleteProduct(): void {
    this.customerService.deleteById(this.temp.id).subscribe(data => {
      alert("Delele is Success!!!");
      this.ngOnInit();
    })

  }


}
