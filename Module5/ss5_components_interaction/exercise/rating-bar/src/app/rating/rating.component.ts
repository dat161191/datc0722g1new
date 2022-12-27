import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input()
  ratingValue: number;
  @Output()
  valueChange=new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  changRating(value: string) {
    this.valueChange.emit(value);
  }
}
