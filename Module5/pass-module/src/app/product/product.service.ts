import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {
  }

  getAll(serchName: any): Observable<Product[]> {
    let url = this.URL;
    if (serchName) {
      url += '?name_like=' + serchName;
    }
    console.log(url);
    return this.http.get<Product[]>(url);
  }

  deleteById(id: number | undefined): Observable<Product> {
    return this.http.delete(this.URL + '/' + id);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }

  edit(product: Product): Observable<Product> {
    return this.http.patch<Product>(this.URL + '/' + product.id, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL + '/' + id);
  }

}
