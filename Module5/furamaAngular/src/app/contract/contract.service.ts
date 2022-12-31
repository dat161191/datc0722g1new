import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "./Contract";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL = 'http://localhost:3000/contracts'

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.URL);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(this.URL + '/' + id);
  }

  deleteById(id: number | undefined): Observable<Contract> {
    return this.http.get<Contract>(this.URL + '/' + id);
  }
}
