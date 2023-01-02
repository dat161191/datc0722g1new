import {Component, OnInit} from '@angular/core';
import {Contract} from "../Contract";
import {ContractService} from "../contract.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  temp: Contract = {};
  searchContract: FormGroup = new FormGroup({name: new FormControl()});

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data => {
      this.contractList = data;
    })
  }


  deleteProduct() {
    this.contractService.deleteById(this.temp.id).subscribe(data => {
      alert("Delele is Success!!!");
      this.ngOnInit();
    })
  }

  onSearch() {
    this.contractService.getAll(this.searchContract.value.name).subscribe(data => {
      this.contractList = data;
    }, error => {
    }, () => {
    });
  }
}
