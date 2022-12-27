import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingComponent } from './rating/rating.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
