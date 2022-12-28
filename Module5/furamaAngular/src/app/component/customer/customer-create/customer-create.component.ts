import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/CustomerType";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  formCustomerCreate: FormGroup;
  customerTypeList: CustomerType[]=[
    {
      id:1,
      name:"Diamond",
    },
    {
      id:2,
      name:"Platium",
    },
    {
      id:3,
      name:"Gold",
    },
    {
      id:4,
      name:"Silver",
    },{
      id:5,
      name:"Member",
    }
  ];

  constructor() {
    this.formCustomerCreate=new FormGroup({
      id: new FormControl('',[Validators.required,Validators.pattern("[K][H][0-9]{4}")]),
      customerType: new FormControl('',Validators.required),
      name: new FormControl('',[Validators.required,Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
      dateOfBirth: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      idCard: new FormControl('',[Validators.required,Validators.pattern("[0-9]{9}")]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0][9][0][0-9]{7}')]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl('',Validators.required)
    })
  }
  get cus(){
    return this.formCustomerCreate.controls
  }
  ngOnInit(): void {
  }

  createCustomer() {
    console.log(this.formCustomerCreate.value)
  }
}
