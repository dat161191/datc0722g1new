import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Statistical} from "./statistical";

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  urlSearch = 'http://localhost:8080/statistical/search';
  urlList = 'http://localhost:8080/statistical';

  constructor(private http: HttpClient) {
  }

  display(): Observable<Statistical[]> {
    return this.http.get<Statistical[]>(this.urlList);
  }

  search(month: number, year: number): Observable<Statistical[]> {
    console.log(this.urlSearch + '?year=' + year + '&month=' + month);
    return this.http.get<Statistical[]>(this.urlSearch + '?year=' + year + '&month=' + month);
  }
}
