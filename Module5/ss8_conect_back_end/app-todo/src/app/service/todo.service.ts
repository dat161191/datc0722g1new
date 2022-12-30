import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = 'http://localhost:3000/TranGia';

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<any> {
    return this.http.get<Todo[]>(this.URL);
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.URL, todo);
  }
}
