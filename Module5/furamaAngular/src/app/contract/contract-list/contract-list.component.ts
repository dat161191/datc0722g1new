import {Component, OnInit} from '@angular/core';
import {ContractDetail} from "../ContractDetail";
import {Employee} from "../../employee/Employee";
import {Customer} from "../../customer/Customer";
import {Facility} from "../../facility/Facility";
import {Contract} from "../Contract";
import {ContractService} from "../contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  temp: Contract = {};

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data => {
      this.contractList = data;
    })
  }


  sendId(id: any) {
    this.contractService.findById(id).subscribe(data => {
      return this.temp = data;
    })
  }

  deleteProduct() {
    this.contractService.deleteById(this.temp.id).subscribe(data => {
      alert("Delele is Success!!!");
      this.ngOnInit();
    })
  }
}
