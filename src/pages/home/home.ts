import { OrderProvider } from './../../providers/order/order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public orderProv: OrderProvider, public prodProv: ProductProvider) {
    
  }

  ionViewDidEnter(){
    this.prodProv.getAll().subscribe(rs => {
      console.log(rs);
    })
  }
}
