import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL)

  }
  deleteById(id: number | undefined): Observable<Customer> {
    return this.http.delete<Customer>(this.URL + '/' + id);
  }
  findById(id: number): Observable<Customer> {
    return this.http.get(this.URL + '/' + id);
  }

}
