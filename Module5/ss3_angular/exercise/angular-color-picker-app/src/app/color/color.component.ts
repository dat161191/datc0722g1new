import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  selected: string = '';
  url?: string;

  constructor() {
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  choosenColor(target: any) {
    this.selected = target.value;
  }

  choosenImg(target: any) {
    this.url=target.value
  }
}
