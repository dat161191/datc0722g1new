import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Consignment} from '../model/consignment';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  URL = 'http://localhost:8080/consignment';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    console.log(this.URL);
    return this.http.get<any>(this.URL);
  }

  save(consignment: Consignment): Observable<Consignment> {
    console.log(consignment);
    return this.http.post<Consignment>(this.URL, consignment);
  }

  deleteById(id: number | undefined): Observable<Consignment> {
    return this.http.delete<Consignment>(this.URL + '/' + id);
  }

  update(consignment: Consignment): Observable<Consignment> {
    console.log(consignment);
    return this.http.patch<Consignment>(this.URL + '/' + consignment.id, consignment);
  }
}
