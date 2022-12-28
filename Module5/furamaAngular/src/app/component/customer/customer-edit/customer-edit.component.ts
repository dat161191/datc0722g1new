import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/CustomerType";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formCustomerEdit: FormGroup;
  customerTypeList: CustomerType[] = [
    {
      id: 1,
      name: "Diamond",
    },
    {
      id: 2,
      name: "Platium",
    },
    {
      id: 3,
      name: "Gold",
    },
    {
      id: 4,
      name: "Silver",
    }, {
      id: 5,
      name: "Member",
    }
  ];

  constructor() {
    this.formCustomerEdit = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern("[K][H][0-9]{4}")]),
      customerType: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern("[0-9]{9}")]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0][9][0][0-9]{7}')]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  get cus() {
    return this.formCustomerEdit.controls
  }

  editCustomer() {
    console.log(this.formCustomerEdit.value)
  }
}
