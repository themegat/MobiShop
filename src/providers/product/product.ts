import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  private domain = 'https://palota-development.appspot.com';

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get<{ message: string, data: any }>(this.domain + '/api/products')
       .pipe(map(data => {
         return data.data.map(rs => {
           return {
             id: rs.key,
             name: rs.name,
             category: rs.category,
             price: rs.price
           };
         })
       }));
   }
 
   add(order) {
     return this.http.post(this.domain + '/api/products', order);
   }
 
   delete(key) {
     return this.http.delete(this.domain + '/api/products/' + key);
   }
 
   update(key, order) {
     return this.http.put(this.domain + '/api/products/' + key, order);
   }
}
