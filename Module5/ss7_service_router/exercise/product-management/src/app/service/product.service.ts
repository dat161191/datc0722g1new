import {Injectable} from '@angular/core';
import {IProduct} from '../model/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: IProduct) {
    this.products.push(product);
  }

  findById(id: number) {
    let temp = this.products.filter(e => e.id === id);
    return temp[0];
  }

  updateProduct(id: number | undefined, product: IProduct) {
    length = this.products.length;
    for (let i = 0; i < length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
  deleteById(id: number | undefined) {
    if (id != undefined) {
      let student = this.findById(id);
      if (student != null) {
        let length = this.products.length
        for (let i = 0; i < length; i++) {
          if (student.id == this.products[i].id) {
            this.products.splice(i, 1);
            break;
          }
        }
      }
    }
  }
}
