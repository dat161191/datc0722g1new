import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../employee/Employee";
import {Facility} from "../../facility/Facility";
import {Customer} from "../../customer/Customer";
import {Contract} from "../Contract";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contract: FormGroup;

  constructor() {
    this.contract = new FormGroup({
      id: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.required),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      facility: new FormControl('', Validators.required),
    })
  }

  get cont() {
    return this.contract.controls;
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.contract.value);
  }
}
