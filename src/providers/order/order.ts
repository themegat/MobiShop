import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  private domain = 'https://palota-development.appspot.com';

  constructor(public http: HttpClient) {
  }

  getAll() {
   return this.http.get<{ message: string, data: any }>(this.domain + '/api/orders')
      .pipe(map(data => {
        return data.data.map(orders => {
          return {
            id: orders.key,
            productID: orders.product_id,
            quantity: orders.quantity
          };
        })
      }));
  }

  add(order) {
    return this.http.post(this.domain + '/api/orders', order);
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  delete(key) {
    return this.http.delete(this.domain + '/api/orders/' + key);
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  update(key, order) {
    return this.http.put(this.domain + '/api/orders/' + key, order);
    // .subscribe(data => {
    //   console.log(data);
    // });
  }
}
