import {Component, OnInit} from '@angular/core';
import {Statistical} from "./statistical";
import {StatisticalService} from "./statistical.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-thong-ke',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.css']
})
export class StatisticalComponent implements OnInit {
  statisticalList: Statistical[] = [];
  // statisticalList: Statistical | null | undefined;
  yearStart = 2022;
  currentYear: number;
  currentMonth: number;
  yearList: number [] = [];
  monthList: number[] = [];

  constructor(private statisticalService: StatisticalService) {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
    // this.monthList = [this.currentMonth, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.getYearList();
  }

  // ngOnInit(): void {
  //   this.statisticalService.search(0, 0).subscribe(data => {
  //     this.statisticalList = data;
  //   })
  // }

  ngOnInit(): void {
    this.statisticalService.display().subscribe(data => {
      this.statisticalList = data;
    })
  }

  onSearch(value: string, value2: string) {
    console.log(value, value2)
    this.statisticalService.search(+value, +value2).subscribe(data => {
      this.statisticalList = data;
      console.log(data)
    })
  }

  getYearList() {
    for (let i = this.yearStart; i <= this.currentYear; i++) {
      this.yearList.push(i);
    }
    // console.log(this.yearList);
    return this.yearList;
  }


}
