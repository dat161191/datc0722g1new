import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  starValue: number = 2;
  colorStar: string = 'black';

  constructor() {
  }

  ngOnInit(): void {
  }

  saveChange(event: number) {
    console.log(event);
    this.starValue = event;
    if (this.starValue <= 2) {
      this.colorStar = 'silver';
    } else if (this.starValue <= 3) {
      this.colorStar = 'violet';
    } else if (this.starValue <= 4) {
      this.colorStar = 'gold';
    } else {
      this.colorStar = 'red';
    }
  }
}
