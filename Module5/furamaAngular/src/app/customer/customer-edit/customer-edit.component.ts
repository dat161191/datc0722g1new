import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../CustomerType";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../Customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formCustomerEdit: FormGroup;
  customerTypeList: CustomerType[] = [];
  id: number | undefined;
  customer: Customer | null = {};

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private active: ActivatedRoute, private router: Router) {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypeList = data;
    })
    this.active.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
      if (this.id != null) {
        this.getCustomer(this.id);
      }
    })
    this.formCustomerEdit = new FormGroup({
      id: new FormControl(this.customer?.id),
      customerCode: new FormControl(this.customer?.customerCode, [Validators.required, Validators.pattern('[K][H][-][0-9]{4}')]),
      customerType: new FormControl(this.customer?.customerType, Validators.required),
      name: new FormControl(this.customer?.name, [Validators.required, Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
      dateOfBirth: new FormControl(this.customer?.dateOfBirth, Validators.required),
      gender: new FormControl(this.customer?.gender, Validators.required),
      idCard: new FormControl(this.customer?.idCard, [Validators.required, Validators.pattern("[0-9]{9}")]),
      phoneNumber: new FormControl(this.customer?.phoneNumber, [Validators.required, Validators.pattern('[0][9][0][0-9]{7}')]),
      email: new FormControl(this.customer?.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl(this.customer?.address, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  get cus() {
    return this.formCustomerEdit.controls
  }

  editCustomer() {
    this.customer = this.formCustomerEdit.value;
    console.log(this.customer)
    // @ts-ignore
    this.customerService.editCustomer(this.customer.id, this.customer).subscribe(data => {
      this.router.navigateByUrl('/customer/list');
      alert('Edit is success!!!');
    })
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(data => {
      this.formCustomerEdit = new FormGroup(
        {
          id: new FormControl(data.id),
          customerCode: new FormControl(data.customerCode, [Validators.required, Validators.pattern('[K][H][-][0-9]{4}')]),
          customerType: new FormControl(data.customerType?.name, Validators.required),
          name: new FormControl(data.name, [Validators.required, Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
          dateOfBirth: new FormControl(data.dateOfBirth, Validators.required),
          gender: new FormControl(data.gender, Validators.required),
          idCard: new FormControl(data.idCard, [Validators.required, Validators.pattern("[0-9]{9}")]),
          phoneNumber: new FormControl(data.phoneNumber, [Validators.required, Validators.pattern('[0][9][0][0-9]{7}')]),
          email: new FormControl(data.email),
          address: new FormControl(data.address)
        })
    })

  }
  compareCustomerType(temp1: CustomerType, temp2: CustomerType): boolean {
    return temp1.id === temp2.id;
  }
}
