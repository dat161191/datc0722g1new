import {Injectable} from '@angular/core';
import {IProduct} from '../model/i-product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = ' http://localhost:3000/product';

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<IProduct []> {
    console.log(this.URL);
    return this.http.get<IProduct[]>(this.URL);
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL, product);
  }

  findById(id: number): Observable<IProduct> {
    // return this.http.get(`${this.URL}/product/${id}`);
    return this.http.get(this.URL + '/' + id);
  }

  updateProduct(id: number | undefined, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.URL + '/' + id, product);
  }

  deleteById(id: number | undefined): Observable<IProduct> {
    return this.http.delete<IProduct>(this.URL + '/' + id);
  }

}
