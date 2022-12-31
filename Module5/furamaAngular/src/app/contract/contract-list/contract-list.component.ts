import {Component, OnInit} from '@angular/core';
import {ContractDetail} from "../ContractDetail";
import {Employee} from "../../employee/Employee";
import {Customer} from "../../customer/Customer";
import {Facility} from "../../facility/Facility";
import {Contract} from "../Contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
