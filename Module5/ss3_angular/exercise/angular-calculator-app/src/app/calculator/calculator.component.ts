import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1?: number;
  num2?: number;
  caculate?: string;
  result?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  input1(target: any) {
    this.num1 = target.value;
  }

  operator(caculate: string) {
    this.caculate = caculate;
  }

  input2(target: any) {
    this.num2 = target.value;
  }

  // @ts-ignore
  caculator() {
    // @ts-ignore
    switch (this.caculate) {
      case "+":
        // @ts-ignore
        this.result=parseInt(this.num1) + parseInt(this.num2);
        break;
       case "-":
        // @ts-ignore
         this.result=parseInt(this.num1) - parseInt(this.num2);
        break;
       case "*":
        // @ts-ignore
         this.result=parseInt(this.num1) * parseInt(this.num2);
        break;
       case "/":
        // @ts-ignore
         this.result=parseInt(this.num1) / parseInt(this.num2);
        break;
    }
  }
}
